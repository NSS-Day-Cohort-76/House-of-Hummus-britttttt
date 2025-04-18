import { setVegetableId } from "./TransientState.js"

const selectVegetable = (changeEvent) => {
    if (changeEvent.target.name === "vegetable"){
        const vegetableId = parseInt(changeEvent.target.value)
        setVegetableId(vegetableId)
    }
}

export const Vegetables = async () => {
    const response = await fetch ("http://localhost:8088/vegetables")
    const vegetableOptions = await response.json()

    document.addEventListener("change", selectVegetable)

    let html = '<h2>Vegetables</h2>'

    const vegetablesArray = vegetableOptions.map(
        (vegetable) => {
            return`
                <div><input type="radio" name="vegetable" value="${vegetable.id}"/>${vegetable.type}</div>
            `
        }
    )
    
    html += vegetablesArray.join("")
    return html
}