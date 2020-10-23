const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

// notes is stored in an array (notes = parsedNotes) but we don't have an array.
// Create variable notes and set it equal to an empty array.
let notesArray = []
// Use 'let' because we reassign it below (notes = parsedNotes).

//can't import into NoteList because we don't have an export on getNotes, need to add
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notesArray = parsedNotes
        })

}

//need to create copy of the array (useNotes)
export const useNotes = () => {
    return notesArray.slice()
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}