import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from './Criminal.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminals = useCriminals()

        let criminalHTMLRepresentation = ""
        for (const criminal of criminals) {
            criminalHTMLRepresentation += Criminal(criminal)
        }
        const contentElement = document.querySelector(".criminalsContainer")

        contentElement.innerHTML += `
        <h2>Criminals of Glassdale</h2>
        <div class="criminal__boxes">
        ${criminalHTMLRepresentation}
        </div>
        `

    }
    )
}


