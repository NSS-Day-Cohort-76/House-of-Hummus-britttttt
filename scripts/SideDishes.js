import { setSideId } from "./TransientState.js"

const selectSide = (changeEvent) => {
    if (changeEvent.target.name === "side"){
        const sideId = parseInt(changeEvent.target.value)
        setSideId(sideId)
    }
}

export const Sides = async () => {
    const response = await fetch ("http://localhost:8088/sides")
    const sideOptions = await response.json()

    document.addEventListener("change", selectSide)

    let html = '<h2>Sides</h2>'

    const sidesArray = sideOptions.map(
        (side) => {
            return`
                <div><input type="radio" name="side" value="${side.id}"/>${side.title}</div>
            `
        }
    )
    
    html += sidesArray.join("")
    return html
}

