import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
// whole const render function is within the event hub, so need to add:
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <input id="note--dateOfInterview" type="date" />
    <input id="note--author" type="text" placeholder="Your Name Here" />
    <input id="note--suspect" type="text" placeholder="Suspect Name Here" />
    <textarea id="note--note" placeholder="Your Note Here" ></textarea>
        <button id="saveNote">Save Note</button>
    `
}

// Need to save that information I've put in. Use click event to store the info I enter.
eventHub.addEventListener("click", clickEvent => {
    // Need to target this specific click event, not other's (potentatially) on the page
    if(clickEvent.target.id === "saveNote") {
        console.log("clickEvent:", clickEvent)
        
        // grab input values from form input values - DO THIS FOR THE REST OF THE INPUTS. timestamp = Date.now() for current timestamp
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const timestamp = Date.now()
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--note").value
        
        console.log("dateOfInterview:", dateOfInterview)
        console.log("timestamp:", timestamp)
        console.log("author:", author)
        console.log("suspect:", suspect)
        console.log("note:", note)
        
        // make a note object
        const newNote = {
            dateOfInterview: dateOfInterview, //could also be dateOfInterview.value and not have .value above. Value here is taco, could be DOI, etc
            timestamp, //if value is exactly the same, can format like this
            author,
            suspect,
            note 
        }
        
        // send object to database / API / json file
        saveNote(newNote)
        //When you run this, you get an error because there is no ID property on the notes you've created, need to add them

    }
})


export const NoteForm = () => {
    render()
}