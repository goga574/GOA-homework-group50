let ol = document.querySelectorAll("ol")

let form = document.querySelector("form")

class OrderManeger{
    constructor(){
        this.activeOrders = new Map((JSON.parse(localStorage.getItem("activeOrders"))) || new Map([]))
        this.complatedOrders = new Set()
    }
    processOrder(orderId,customerName,food,callback){
        this.activeOrders.set(orderId,{customerName:customerName,food:food})
        localStorage.setItem("activeOrders",JSON.stringify([...this.activeOrders]))
    }
    render(){
        let html = ""
        for(let [id,nameNfood] of this.activeOrders){
            html+=`<li>${id} : ${nameNfood.customerName} ${nameNfood.food}</li>`
        }
        
        return html
    }
}

let callback=(orderId)=>{
    console.log(`შეკვეთა #${orderId} დამთავრდა`)
}
let costumer = new OrderManeger()
costumer.render()
let costumerNumber  = 0
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    costumerNumber++
    costumer.processOrder(costumerNumber,form.name.value,form.food.value,callback)

    ol[0].innerHTML = costumer.render()
})

let map = new Map([["colorOne","Red"],["colortwo","Yellow"]])
console.log([...map.entries()])

