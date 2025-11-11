let ol = document.querySelectorAll("ol")

let form = document.querySelector("form")

class OrderManeger {
    constructor() {
        this.activeOrders = new Map(JSON.parse(localStorage.getItem("activeorders"))) || new Map([])
        this.complatedOrders = new Set(JSON.parse(localStorage.getItem("complatedorders"))) || new Set()
    }
    processOrder(orderId, customerName, food, callback) {
        this.activeOrders.set(orderId, { customerName: customerName, food: food })
        localStorage.setItem("activeOrders", JSON.stringify([...this.activeOrders]))
    }
    render() {
        let html = ""
        for (let [id, nameNfood] of this.activeOrders) {
            html += `<li>${id} : ${nameNfood.customerName} ${nameNfood.food}</li>`
        }

        return html
    }
}

let callback = (orderId) => {
    console.log(`შეკვეთა #${orderId} დამთავრდა`)
}
let costumer = new OrderManeger()

ol[0].innerHTML = costumer.render()

let costumerNumber = JSON.parse(localStorage.getItem("costumerNumber")).length 

form.addEventListener("submit", (e) => {
    e.preventDefault()
    costumerNumber++
    costumer.processOrder(costumerNumber, form.name.value, form.food.value, callback)

    ol[0].innerHTML = costumer.render()
})

