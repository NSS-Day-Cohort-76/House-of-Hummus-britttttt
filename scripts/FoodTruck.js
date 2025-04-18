import { Entrees } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Vegetables } from "./Vegetables.js"



export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const sidesHTML = await Sides()
    const entreesHTML = await Entrees()
    const vegetablesHTML = await Vegetables()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="Entrees">
            ${entreesHTML}
        </article>
        
        <article class="Side-Dishes">
            ${sidesHTML}
        </article>
        
        <article class="Vegetables">
            ${vegetablesHTML}
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
