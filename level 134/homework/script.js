// შექმენით სამი Promise:

//  ▪getProduct – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 1 წამში,
//  ▪getUser – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 2 წამში,
//  ▪getPayment – აბრუნებს რაღაცა ინფოს(რაც თქვენ გინდათ) 3 წამში.
// გამოიყენეთ Promise.all, რათა მიიღოთ ყველა მონაცემი ერთად.
// თუ რომელიმე ჩაიჭრება(გააკეთეთ ისე, რომ პრომისებმა რანდომულად ან დარეჯექდნენ ან დარეზოლვდნენ), 
// მთლიანი ოპერაცია უნდა გადავიდეს catch‑ში და გამოიტანოს "შეკვეთის დამუშავება ჩაიშალა".





let random = Math.floor(Math.random() * 10) + 1
console.log(random)
let getProduct = new Promise((resolve, reject) => {
    if (random >= 1 && random <= 7) {
        setTimeout(() => {
            resolve("info about me")
        }, 1000)
    } else {
        reject("info about me was rejected")
    }

})

let random1 = Math.floor(Math.random() * 10) + 1
console.log(random1)
let getUser = new Promise((resolve, reject) => {
    if (random1 >=1 && random1 <= 7) {
        setTimeout(() => {
            resolve("info about my friends")
        }, 2000)
    } else {
        reject("info about my friend was rejected")
    }
})

let random2 = Math.floor(Math.random() * 10) + 1
console.log(random2)
let getPayment = new Promise((resolve, reject) => {
    if (random2 >= 1 && random2 <= 7) {
        setTimeout(() => {
            resolve("info about my car")
        }, 3000)
    }else{
        reject("info about my car was rejected")
    }

})



Promise.all([getProduct, getUser, getPayment]).then(data => {
    console.log(data)
}).catch(error =>{
    console.log("შეკვეთის დამუშავება ჩაიშალა")
})

// ================================
// //2) შექმენით 'უნივერსალური API':

//  ▪პრომისი - getWeather - არეზოლვებს რანდომულ ამინდის ემოჯის ან არეჯექთებს: 'No info'
//  ▪პრომისი - getCurrency - არეზოლვებს დოლარის კურს(HardCode - 2.7) ან არეჯექთებს: 'No info'
//  ▪პრომისი - getNews - არეზოლვებს რაღაცა სიახლეს ან არეჯექთებს: 'No info'
// გამოიყენეთ Promise.allSettled, რომ მიიღოთ ყველა პრომისის შედეგი/პასუხი.
// კონსოლში უნდა გამოიტანოთ თითოეული {status, value} ან {status, reason}.


let getWeather = new Promise((resolve, reject) => {
    let random2 = Math.floor(Math.random() * 9) + 5
    if (random2 >= 1 && random2 <= 3) {
        resolve("❄️")
    } else if (random2 > 3 && random2 <= 6) {
        resolve("☀️")
    } else if (random2 > 6 && random2 <= 9) {
        resolve("🌧️")
    } else {
        reject("No info On Icons")
    }
})

// getWeather.then(data=>{
//     console.log(data)
// })

let getCurrency = new Promise((resolve, reject) => {
    let random3 = Math.floor(Math.random() * 2) 
    random3 == 1 ? resolve("USD Currency - 2.7") : reject("No Info about Currency")

})


// getCurrency.then(data => {
//     console.log(data)
// })



let getNews = new Promise((resolve,reject)=>{
    let random3 = Math.floor(Math.random() * 2) 
    random3 == 1 ? resolve("War Will Happen") : reject("No Info War")
})

// getNews.then(data => {
//     console.log(data)
// })


Promise.allSettled([getCurrency,getWeather,getNews])
    .then(data =>{
        for(let i of data){
            console.log(i)
            if(i.status === "fulfilled"){
                console.log(`the status of this Promise is ${i.status} and the value of This Promise is ${i.value}`)
            }else{
                console.log(`the status of this Promise is ${i.status} and the reason of this is ${i.reason}`)
            }
        }
    })
















// 3)==================================
// შექმენით უნივერსალური ფუნქცია:

//  ▪fakeServer(serverName)
// ფუნქციის შიგნით დააგენერეითეთ:
//  ▪0 ან 1 და შეინახეთ იგი willResolve ცვლადში
//  ▪რიცხვი 100 დან 4000 და შეინახეთ იგი time ცვლადში
// ამ ფუნქციამ უნდა დააბრუნოს პრომისი, რომელიც დააბრუნებს პასუხს time დროში.
// პრომისი დაარეზოლვებს received data from ${serverName} in ${time}ms იმ შემთხვევაში თუ willResolve === 1
// თუ willResolve === 0 პრომისი დაარეჯექთებს რაიმე ერორს.
// გამოიყენეთ Promise.any და მის შიგნით რამდენჯერმე გამოიძახეთ შექმნილი ფუნქცია.
// თუ ყველა ჩავარდება, დაიჭირეთ AggregateError და გამოიტანეთ ყველა ჩავარდნის მიზეზი .errors მასივით.


function fakeServer(serverName){
    let willResolve =  Math.floor(Math.random() * 2) 
    let time = Math.floor(Math.random() * 4000) + 100
    return new Promise((resolve,reject)=>{
        if(willResolve === 1){
            setTimeout(()=>{
                resolve(`received data from ${serverName} in ${time}ms`)
            },time)
        }else{
            reject("rejected")
        }
    })
}



Promise.any([fakeServer("something"),fakeServer("something2")]).then(data =>{
    console.log(data)
}).catch(error =>{
    console.log(error.errors)
})
