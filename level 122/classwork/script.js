let ol = document.querySelectorAll("ol")
let form = document.querySelector("form")

class OrderManeger {
    constructor() {
        this.activeOrders = new Map(JSON.parse(localStorage.getItem("activeorders"))) || new Map([])
        this.complatedOrders = new Set(JSON.parse(localStorage.getItem("complatedorders"))) || new Set()
    }

    processOrder(orderId, customerName, food, callback) {
        this.activeOrders.set(orderId, { customerName: customerName, food: food })
        localStorage.setItem("activeorders", JSON.stringify([...this.activeOrders]))

        setTimeout(() => {
            this.complatedOrders.add([customerName, food])
            this.activeOrders.delete(orderId)
            ol[0].innerHTML = this.render()q

            localStorage.setItem("activeorders", JSON.stringify([...this.activeOrders]))

            localStorage.setItem("complatedorders", JSON.stringify([...this.complatedOrders]))



            ol[1].innerHTML = this.renderComplated()


        }, 5000)
    }


    render() {
        let html = ""
        for (let [id, nameNfood] of this.activeOrders) {
            console.log(id)
            console.log(nameNfood.customerName, nameNfood.food)
            html += `<li>${id} ${nameNfood.customerName} ${nameNfood.food}</li>`

        }
        return html

    }


    renderComplated() {
        let html = ""
        for (let [id, nameNfood] of this.complatedOrders) {
            html += `<li>${id}: ${nameNfood}</li>`

        }
        return html

    }


}

let callback = (orderId) => {
    console.log(`შეკვეთა #${orderId} დასრულდა`)
}



let costumer = new OrderManeger()
ol[0].innerHTML = costumer.render()

let costumerNumber = JSON.parse(localStorage.getItem("costumerNumber")) || 0


ol[1].innerHTML = costumer.renderComplated()


form.addEventListener("submit", (e) => {
    e.preventDefault()

    costumerNumber++
    localStorage.setItem("costumerNumber", costumerNumber)
    costumer.processOrder(costumerNumber, form.name.value, form.food.value, callback)
    costumer.render()

    ol[0].innerHTML = costumer.render()

})

