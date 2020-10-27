const eventHub = document.querySelector(".container")

export const Witness = witnessObj => {
    return `
    <div class="witness">
    <P class="witness__name">${witnessObj.name}</p>
    <P class="witness__statements">${witnessObj.statements}</p>
    </div>
    `
}