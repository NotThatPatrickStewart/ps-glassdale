import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";
import { Facility } from './Facility.js'

const facilityContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let criminalArray =[]
let facilitiesArray = []
let criminalFacilitiesArray = []


const render = (criminalArray, facilitiesArray, relationshipArray) => {
 
    //iterate all facilities
    facilityContainer.innerHTML = ` <h2>Facilities:</h2>
    <section class="facilityList">
    ${facilitiesArray.map(
        (facilityObj) => {
            //filter all relationships to get only those for this facility
            const criminalsForGivenFacility = relationshipArray.filter(crimFac => crimFac.facilityId === facilityObj.id)

            //convert the relationships to criminals with .map()
            const criminals = criminalsForGivenFacility.map(crimFac => {
                const matchingCriminalObj = criminalArray.find(criminal => criminal.id === crimFac.criminalId)
                return matchingCriminalObj
            })
                console.log("criminals", criminals)
            //pass the matching facilities to Facility.js
            return Facility(facilityObj, criminals)
        }
    ).join("") } </section>`
}

const FacilityList = () => {
    getFacilities()
        .then(getCriminals)
        .then(getCriminalFacilities)
        .then(
            () => {
                criminalArray = useCriminals()
                facilitiesArray = useFacilities()
                criminalFacilitiesArray = useCriminalFacilities()
                    render(criminalArray, facilitiesArray, criminalFacilitiesArray)
                // console.log("criminals array:", criminalsArray, "facilities array:", facilitiesArray, "criminal facilities array:", criminalFacilitiesArray)
            })
}

eventHub.addEventListener("facilitiesButtonClicked", () => {
    FacilityList()
})
