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
        <div class="criminal__boxes">
        <h2>Criminals of Glassdale</h2>
        ${criminalHTMLRepresentation}
        </div>
        `
        
    }
        
        )
    }


