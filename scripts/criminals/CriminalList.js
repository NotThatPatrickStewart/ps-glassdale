import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js";

const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("CrimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        console.log("event:", event)

        const crimeId = event.detail.crimeThatWasChosen
        const foundCrime = useConvictions().find(conviction => {
            return conviction.id === crimeId
        })
        const matchingCriminals = useCriminals().filter(criminal => {
            return criminal.conviction === foundCrime.name
        })
        render(matchingCriminals)
    }
})


const render = criminalCollection => {
    let criminalsHTMLRepresentation = ""
    for (const criminal of criminalCollection)

        criminalsHTMLRepresentation += Criminal(criminal)

    criminalsContainer.innerHTML = `
        <h2>Criminals of Glassdale</h2>
        <section class="criminalsList">
            ${criminalsHTMLRepresentation}
        </section>
    `
}



export const CriminalList = () => {
    getCriminals().then(() => {
        const appStateCriminals = useCriminals()
        render(appStateCriminals)
    })
}
