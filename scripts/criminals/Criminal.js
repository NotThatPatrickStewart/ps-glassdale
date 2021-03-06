const eventHub = document.querySelector(".container")

// added id="criminal-${criminalObj.id}" so that we could target individual id's to populate alibis
export const Criminal = (criminalObj, facilities) => {
    return `
<div id="criminal-${criminalObj.id}" class="criminal">
    <h3 class="criminal__name">Suspect: ${criminalObj.name}</h3>
    <p class="criminal__age">Age: ${criminalObj.age}</p>
    <p class="arresting__officer">Arresting Officer: ${criminalObj.arrestingOfficer}</p>
    <p class="criminal__incarcerationStart">Sentenced: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="criminal__incarcerationEnd">Released: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <div>
            <h3>Facilities:</h3>
            <ul>
                ${facilities.map(fac => `<li>${fac.facilityName}</li>`).join("")}
            </ul>
        </div>
    <button id="associates--${criminalObj.id}">Associate Alibis</button>
</div>
`
}

eventHub.addEventListener("click", (eventObj) => {
    //split the id of the alibi button
    const [nameofId, criminalId] = eventObj.target.id.split("--")
    
    //check to see if the button that was clicked IS in fact the alibi button
    if(eventObj.target.id.startsWith("associates--")){
        console.log("button was clicked:", nameofId, criminalId)    
    //build a custom event
    const customEvent = new CustomEvent("alibiButtonClicked", {
        detail: {
            criminalId: criminalId
        }
    })
    //dispatch to eventHub so that other modules can listen for this event
    eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", eventObj => {
        const [nameOfId, witnessId] = eventObj.target.id.split("--")

        if(eventObj.target.id.startsWith("witnesses--")){
            console.log("button was clicked:", nameOfId, witnessId)

        const customEvent = new CustomEvent("witnessButoonClicked", {
            detail: {
                witnessId: witnessId
            }
        })
        eventHub.dispatchEvent(customEvent)
        }
})