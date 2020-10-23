import { getOfficers, useOfficers } from './OffficerProvider.js';
import { Officer } from './Officer.js'

const officerContainer = document.querySelector(".officersContainer")


export const OfficerList = () => {
    getOfficers().then(() => {
        const officers = useOfficers()

        let officerHTMLRepresentations = ""
        for (const officer of officers) {
            officerHTMLRepresentations += Officer(officer)
        }

        officerContainer.innerHTML = `
        <h2>Officers of Glassdale</h2>
        <div class="officersList">
        ${officerHTMLRepresentations}
        </div>
        `
    }
    )
}