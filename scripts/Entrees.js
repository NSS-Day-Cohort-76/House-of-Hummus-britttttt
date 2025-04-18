import { setEntreeId } from "./TransientState.js"

const selectEntree = (changeEvent) => {
    if (changeEvent.target.name === "entree"){
        const entreeId = parseInt(changeEvent.target.value)
        setEntreeId(entreeId)
    }
}

export const Entrees = async () => {
    const response = await fetch ("http://localhost:8088/entrees")
    const entreeOptions = await response.json()

    document.addEventListener("change", selectEntree)

    let html = '<h2>Entrees</h2>'

    const entreesArray = entreeOptions.map(
        (entree) => {
            return`
                <div><input type="radio" name="entree" value="${entree.id}"/> ${entree.name}</div>
            `
        }
    )
    
    html += entreesArray.join("")
    return html
}