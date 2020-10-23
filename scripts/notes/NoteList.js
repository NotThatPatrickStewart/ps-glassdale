//to get notes to appear on the dom:
// get the notes from the API >> use the notes array
// iterate the notes >> make an html representation
// render to the dom

import { getNotes, useNotes } from './NoteDataProvider.js'
import { Note } from './Note.js'

// add reference to the notes container
const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList()) //syntax change to make it DRY so you don't need to put in the entire getNotes function below

export const NoteList = () => {
    getNotes().then(() => {
        const allNotes = useNotes()  //allNotes is an array of objects at this point

        render(allNotes)
    })
}

const render = notesCollection => {
    let noteHTMLRepresentation = ""
    for (const note of notesCollection) {

        noteHTMLRepresentation += Note(note)
    }

    notesContainer.innerHTML = `
    ${noteHTMLRepresentation}
        `
    }
        