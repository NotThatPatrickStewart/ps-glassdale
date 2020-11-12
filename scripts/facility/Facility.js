const eventHub = document.querySelector(".container")

export const Facility = (facilities, criminalObj) => {
    return `
<div id="facility-${facilities.id}" class="facility">
    <h3 class="facility__name">Facility: ${facilities.facilityName}</h3>
        <div>
            <h3>Criminals:</h3>
            <ul>
                ${criminalObj.map(criminal => `<li>${criminal.name}</li>`).join("")}
            </ul>
        </div>
</div>
`
}