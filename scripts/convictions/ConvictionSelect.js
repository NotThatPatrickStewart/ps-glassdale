/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")
eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("CrimeChosen", {
            detail: {
                crimeThatWasChosen: parseInt(event.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
export const ConvictionSelect = () => {
    // console.log("ConvictionSelect: Get data from API and render dropdown to the DOM")
    // Get all convictions from application state
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}
const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Select a crime</option>
            ${convictionsCollection.map(
        convictionObj => {
            return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
        }
    ).join("")
        }
        </select>
    `
}