export const Note = (note, criminal) => {
    // convert object to html string & return that string
return `
<section class="note">
    <h4 class="sus">Suspected Criminal: ${criminal.name}</h4>
    <p>Officer: ${note.officer}</p>
    <p>Date of Interview: ${note.dateOfInterview}</p>
    <p>${note.noteText}</p>
    <p>Date of Entry: ${new Date(note.timestamp).toLocaleDateString('en-US')}</p>
    <button id="deleteNote--${note.id}">Delete</button>
</section>
`
}