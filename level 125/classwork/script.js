// promise --> პირობა , დაპირება

// გატეხილი პირობა -- broke promise
// შესრულებული პირობა -- succes promise
// პირობა რომელიც შესრულების პროცესშია -- pending

// callback




// function receivedData(data){
//     let weather = data
//     console.log(weather)
// }

// function getWeather(callback){  
//     setTimeout(()=>{
//         callback("snow")
//     },0)

// }

// getWeather(receivedData)


//==================


// function hello(callback){
//     console.log("hello!")
//     callback()

// }

// function wait(){
//     console.log("wait")
// }

// function leave(){
//     console.log("Leave")
// }

// function goodbye(){
//     console.log("goodbye!")
// }

// hello(wait)



// function sum(callback,x, y){
//     callback(x + y)
// }

// function display (result){
//     console.log(result)
// }

// sum(display , 5 , 4)

// ===================================




// let pizza

// function orderPizza(){
//     console.log("order pizza")
//     setTimeout(()=>{
//         pizza = "🍕"
//         console.log(`${pizza} is ready`)
//     },2000)
//     console.log("pizza was ordered")
// }



// orderPizza()
// console.log("call Qoli")
// console.log(`Eat ${pizza}`

// ===================================

// function orderPizza(callback){
//     setTimeout(()=>{
//         callback(`🍕`)
//     },2000)
// }

// function pizzaReady(pizza){
//     console.log(`Eat the${pizza}`)
// }
// orderPizza(pizzaReady)


// console.log(`call Qoli`)

// ===================================

// function thing1(callback) {
//     // Call Pizza shop
//     console.log("Calling pizza shop...")
//     callback()
// }

// function thing2(callback) {
//     // Order the pizza
//     console.log("Ordering the pizza...")
//     callback()
// }


// function thing3(callback) {
//     // Eat the pizza
//     console.log("Eating the pizza...")
//     callback()
// }

// thing1(() => {
//     thing2(() => {
//         thing3(()=>{
//             console.log("Finished")
//         })
//     })
// })

// ===================================


// function getWeather(){
//     return new Promise(function(reslove, reject){
//     reslove("sunny")
//     })
// }

// let promise = getWeather()
// promise.then(function(data){
//     console.log(data)
// })



function recieveData(data){
    console.log(data)
}



function getWeather(callback){
    console.log("goga")
    setTimeout(()=>{
        callback("snow")
    },2000)
    
    
}

getWeather(recieveData)