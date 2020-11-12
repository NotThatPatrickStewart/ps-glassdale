const contentTarget = document.querySelector(".facilityButton")
const eventHub = document.querySelector(".container")

export const facilityButton = () => {
    contentTarget.innerHTML = `
    <button id="facilityButton">Facilities</button>
    `
}


//Do I need another event listener? Why does it seem like both events are begin triggered no matter which button I click?
eventHub.addEventListener("click", event => {
    if(event.target.id === "facilityButton") {
        const event = new CustomEvent("facilitiesButtonClicked")
        // console.log("Facility Button Click", event)
        eventHub.dispatchEvent(event)
    }
})