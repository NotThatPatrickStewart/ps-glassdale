import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const witnessContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessButtonClicked", () => {
    WitnessList()
})

const WitnessList = () => {
    getWitnesses().then(() => {
        const witnesses = useWitnesses()

        let witnessHTMLRepresentation = ""
        for (const witness of witnesses) { //iterating over each witness in witness array
            witnessHTMLRepresentation += Witness(witness) // appending string of html to HTML Representation
        } //witnessContainer is dom element, setting innerhtml proprty = to the string which follows it
        witnessContainer.innerHTML = `
        <h2>Witness Statements</h2>
        <div class="witnessList">
        ${witnessHTMLRepresentation}
        </div>
        `
    }
    )
}