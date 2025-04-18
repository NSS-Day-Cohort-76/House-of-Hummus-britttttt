export const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setSideId = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(`User chose side: ${chosenSide}`)

}

export const setVegetableId = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(`User chose vegetable: ${chosenVegetable}`)
}

export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(`User chose entree: ${chosenEntree}`)
}

export const resetTransientState = () => {
    transientState.entreeId = 0
    transientState.vegetableId = 0
    transientState.sideId = 0
} 

export const placeOrder = async() => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders?_expand=entree&_expand=side&_expand=vegetable", postOptions)
    const orders = await response.json()
    
    resetTransientState()
    const  newSubmissionEvent = new CustomEvent("stateChanged")
    document.dispatchEvent(newSubmissionEvent)
}