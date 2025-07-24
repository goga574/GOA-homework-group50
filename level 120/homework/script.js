//  Level 120: 
//  შექმენით OrderManager კლასი, რომელსაც ექნება: 
//  --- თვისებები --- 
// ◽ activeOrders: Map - ობიექტის შექმნისას ცარიელი მაპი
// ◽ completedOrders: Set - ობიექტის შექმნისას ცარიელი სეტი
// ❔ activeOrders მაპი შეინახავს აქტიურ შეკვეთებს სადაც key იქნება orderId: Number, ხოლო value იქნება customerName: String
// ❔ completedOrders სეტი კი იმ მომხმარებლების სახელებს შეინახავს, რომლების შეკვეთებიც შევასრულეთ.
//  --- მეთოდები --- 
// ◽ processOrder(orderId, customerName, callback) 
// ◽ printStatus()
// ❔ printStatus მეთოდი კონსოლზე ბეჭდავს ყველა აქტიურ შეკვეთას(activeOrders) და ყველა დასრულებულ შეკვეთას(completedOrders). გამოიყენეთ ლუპი ანდა დესტრუქცია
// ❔ processOrder მეთოდი ქმნის შეკვეთას(ამატებს activeOrdersში), კონსოლზე გამოაქვს შეტყობინება, რომ ახალი შეკვეთა მივიღეთ და 3 წამით ამუშავებს შეკვეთას (setTimeout)
// ❔ setTimeout ის შიგნით:
//     1)ამოშალეთ შეკვეთა activeOrdersდან და მომხმარებლის სახელი შეინახეთ completedOrders სეტში 
//     2)გამოიძახეთ callBack ფუნქცია(დააბეჭდინეთ, რომ ესა და ეს შეკვეთა შესრულდა)
//     3)გამოიძახეთ printStatus მეთოდი
// ❔ callBack(orderId) ფუნქცია შექმენით კლასის გარეთ და შემდეგი რამ დააბეჭდინეთ კონსოლზე: 'შეკვეთა #${orderId} დამთავრდა'
//  ამის შემდეგ შექმენით OrderManager კლასის ობიექტი და გააკეთეთ რამოდენიმე შეკვეთა განსხავებული id და სახელებით  

let form = document.getElementById("form")

let userName
let foodName
let count = 0

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let userName = e.target.userName.value
    let foodName = e.target.foodName.value

    // let index = 




    order1.processOrder(userName, foodName, orderFinish)

})







class OrderManager {


    constructor(activeOrders, complatedOrders) {
        this.activeOrders = activeOrders
        this.complatedOrders = complatedOrders
        this.count = 0
    }




    printStatus() {
        let arr = [...this.activeOrders]
        console.log("---activeOrders ---")
        arr.map(item => {
            console.log(item[0], item[1])
        })
        console.log("")
        console.log("---complatedOrders---")
        console.log(...this.complatedOrders)
        console.log("")
    }

    processOrder(orderId, customerName, callback) {
        this.activeOrders.set(orderId, customerName)
        this.count ++

        console.log("შეკვეთა მიღებულია,შეკვეთის დასამუშავებლად საჭიროა 3 წამი")
        this.printStatus()
        setTimeout(() => {
            console.log(customerName)
            this.complatedOrders.add(customerName)
            this.activeOrders.delete(orderId)

            callback(orderId)
            this.printStatus()
        }, 3000)
    }
}


const orderFinish = (orderId) => {
    console.log(`შეკვეთა #${orderId} დამთავრდა`)
}


let order1 = new OrderManager(new Map([]), new Set())

order1.printStatus()
