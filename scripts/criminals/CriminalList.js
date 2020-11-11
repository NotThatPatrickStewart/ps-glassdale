import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { useOfficers } from "../officers/OffficerProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";

const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("CrimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        // console.log("event:", event)

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

eventHub.addEventListener("officerChosen", event => {
    if (event.detail.officer !== "0") {
        // console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)
        console.log("event", event)

        const officerId = event.detail.officer
        const foundOfficer = useOfficers().find(arrestingOfficer => {
            return arrestingOfficer.id === officerId
        })
        const matchingCriminals = useCriminals().filter(criminal => {
            return criminal.arrestingOfficer === foundOfficer.name
        })
        render(matchingCriminals)
    }
})


const render = (criminalCollection, facilityCollection, relationshipCollection) => {
    // let criminalsHTMLRepresentation = ""
    // for (const criminal of criminalCollection)

    //     criminalsHTMLRepresentation += Criminal(criminal)
    //iterate all criminals
    criminalsContainer.innerHTML = ` <h2>Criminals of Glassdale</h2>
    <section class="criminalsList">
    ${criminalCollection.map(
        (criminalObj) => {
            //filter all relationships to get only those for this criminal
            const facilitiesForGivenCriminal = relationshipCollection.filter(crimFac => crimFac.criminalId === criminalObj.id)

            //convert the relationships to facilities with .map()
            const facilities = facilitiesForGivenCriminal.map(crimFac => {
                const matchingFacilityObj = facilityCollection.find(facility => facility.id === crimFac.facilityId)
                return matchingFacilityObj
            })
                // console.log("facilities", facilities)
            //pass the matching facilities to Criminal.js
            return Criminal(criminalObj, facilities)
        }
    ).join("") } </section>`
}



export const CriminalList = () => {
    getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
                const criminalsArray = useCriminals()
                const facilitiesArray = useFacilities()
                const criminalFacilitiesArray = useCriminalFacilities()
                render(criminalsArray, facilitiesArray, criminalFacilitiesArray)
                // console.log("criminals array:", criminalsArray, "facilities array:", facilitiesArray, "criminal facilities array:", criminalFacilitiesArray)
            })
}
