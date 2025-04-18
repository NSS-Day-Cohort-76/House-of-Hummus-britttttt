

export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/orders?_expand=entree&_expand=side&_expand=vegetable").then(res => res.json())


    let html = '<div id="Monthly-Sales">'
    let salesDivs = sales.map(
        (order) => {
            const orderPrice = order.entree.price + order.side.price + order.vegetable.price
            return `<p><strong>Order#${order.id} Price: $${orderPrice.toFixed(2)}</strong></p>`
        }

    )

    html += salesDivs.join(" ")
    html += '</div>'

    return html
}

