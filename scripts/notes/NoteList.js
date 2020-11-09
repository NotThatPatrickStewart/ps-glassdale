//to get notes to appear on the dom:
// get the notes from the API >> use the notes array
// iterate the notes >> make an html representation
// render to the dom

import { getNotes, useNotes } from './NoteDataProvider.js'
import { Note } from './Note.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

// add reference to the notes container
const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
        .then(getCriminals) //Could also be .then(() => getCriminals()) These do the same thing, but are NOT the same thing
        .then(() => {
            const notes = useNotes()
            // console.log("note array test:", notes)
            const criminals = useCriminals()

            render(notes, criminals)
        })
}

const render = (noteCollection, criminalCollection) => {
    // debugger
    let notesHTMLRepresentation = ""
    for (const note of noteCollection) {

        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        notesHTMLRepresentation += Note(note, relatedCriminal)
    }
    console.log("notesHTMLRepresentation", notesHTMLRepresentation)
    notesContainer.innerHTML = `
    <h3>Case Notes</h3>
    <div class="suspect"
    ${notesHTMLRepresentation}
  
    </div>
    `
        
    }
