import { getOfficers, useOfficers } from './OffficerProvider.js';
import { Officer } from './Officer.js'

export const OfficerList = () => {
    getOfficers().then(() => {
        const officers = useOfficers()

        let officerHTMLRepresentations = ""
        for (const officer of officers) {
            officerHTMLRepresentations += Officer(officer)
        }
        const contentElement = document.querySelector(".officersContainer")

        contentElement.innerHTML += `
        <h2>Officers of Glassdale</h2>
        <div class="officer__boxes">
        ${officerHTMLRepresentations}
        </div>
        `
    }
    )
}