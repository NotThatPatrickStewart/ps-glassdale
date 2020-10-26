
import { useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")

// show the alibis for the selected criminal - because the click event in this case happens after the page load, we are placing it in a function to control when the event happens
export const createAlibiListener = () => {
    eventHub.addEventListener("alibiButtonClicked", eventObj => {
    console.log("Listening?", eventObj.detail.criminalId)
    // need to find the one criminal whose id matches the criminalId sent in the event
    
    const foundCriminal = useCriminals().find(criminalObj => criminalObj.id === parseInt(eventObj.detail.criminalId))
    // could also be written as:
    // const arrayOfCriminals = useCriminals()
    // const foundCriminal = arrayOfCriminals().find(criminalObj => criminalObj.id {
    // return criminalObj.id === parseInt(eventObj.detail.criminalId)

    console.log("Found the criminal:", foundCriminal)
    // add that criminal's alibi to the criminal card

    AlibiList(foundCriminal)
})
}

// a function that adds a list of alibis to the criminal card
const AlibiList = (criminalObj) => {
    render(criminalObj)
}

// make a render method for adding alibis
const render = (CriminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${CriminalObj.id}`)

    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${CriminalObj.known_associates.map(alibiObj => { //known_associates is the value for the alibi array key and can be found on the glassdale api in the criminal object
            return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
}