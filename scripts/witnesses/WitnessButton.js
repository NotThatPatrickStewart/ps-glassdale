const contentTarget = document.querySelector(".witnessButton")
const eventHub = document.querySelector(".container")

export const witnessButton = () => {
    contentTarget.innerHTML = `
    <button id="witnessButton">Witness Statements</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    
    if(clickEvent.target.id === "witnessButton") {
        console.log("clickEvent", clickEvent)
        const customEvent = new CustomEvent("witnessButtonClicked")
        
        eventHub.dispatchEvent(customEvent)
    }
})

