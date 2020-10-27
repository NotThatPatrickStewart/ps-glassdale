const eventHub = document.querySelector(".container")

// added id="criminal-${criminalObj.id}" so that we could target individual id's to populate alibis
export const Criminal = (criminalObj) => {
    return `
<div id="criminal-${criminalObj.id}" class="criminal">
<p class="criminal__name">${criminalObj.name}</p>
<p class="criminal__age">${criminalObj.age}</p>
<p class="criminal__incarcerationStart">${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
<p class="criminal__incarcerationEnd">${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
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