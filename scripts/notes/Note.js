export const Note = (noteObj) => {
// convert object to html
return `
<div class="note">
<h4 class="note__dateOfInterview"> Date: ${noteObj.dateOfInterview}</h4>
<p class="note__timestamp"> Time: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p> 
<p class="note__author"> Author: ${noteObj.author}</p>
<p class="note__suspect"> ${noteObj.suspect}</p>
<p class="note__note">${noteObj.note}</p>
</div>
`
}