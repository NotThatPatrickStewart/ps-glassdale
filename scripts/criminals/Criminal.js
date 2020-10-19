export const Criminal = (criminalObj) => {
    return `
<div class="criminal">
<p class="criminal__name">${criminalObj.name}</p>
<p class="criminal__age">${criminalObj.age}</p>
<p class="criminal__incarcerationStart">${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
<p class="criminal__incarcerationEnd">${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
</div>
`
}


