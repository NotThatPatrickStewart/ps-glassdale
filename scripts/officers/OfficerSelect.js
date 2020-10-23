import { getOfficers, useOfficers } from "./OffficerProvider.js"


const eventHub = document.querySelector(".container")
const officerFilter = document.querySelector(".filters__officer")
console.log("OfficerSelect: Getting reference to container for dropdown and event hub")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const selectedOfficer = changeEvent.target.value
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officer: parseInt(changeEvent.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const officerSelect = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers()
        render(officers)
    })
}

const render = officerCollection => {
    officerFilter.innerHTML = `
    <select class="dropdown" id="officerSelect">
    <option value="0">Please select an arresting officer...</option>
    ${officerCollection.map(
        officerObj => {
            return `<option value="${officerObj.id}">${officerObj.name}</option>`
        }
    )}
    </select>
    `
}