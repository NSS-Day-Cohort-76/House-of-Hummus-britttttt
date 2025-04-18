import { FoodTruck } from "./FoodTruck.js"
import { placeOrder } from "./TransientState.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const foodTruckHTML = await FoodTruck()
    mainContainer.innerHTML = foodTruckHTML
}

renderAllHTML()

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        placeOrder()
    }
})

document.addEventListener("stateChanged", event => {
    renderAllHTML()
})