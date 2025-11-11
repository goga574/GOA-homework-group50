// Promise 


// let myPromise = Promise.resolve("This Promise Resolved")

// console.log(myPromise)

// myPromise.then(data=>{
//     console.log(data)
// })


// let myPromise2 = Promise.reject("This promise rejected")

// myPromise2.catch(data =>{
//     console.log(data)
// })



// შექმენით რაღაცა პრომისი რომელიც რაიმე მნიშვნელობას დააბრუნებს გარკვეული დროის(1 წამიდან 10 წამამდე) შემდეგ. თუ ეს პრომისი პასუხს არ დააბრუნებს 5 წამის განმავლობაში, მაშინ დაარეჯექთეთ პრომისი და კონსოლზე გამოიტანეთ მესიჯი, რომ პრომისმა დროს გადააჭარბა.


// let promise = new Promise((resolve, reject) => {
//     let randomTime = Math.floor(Math.random() * 10) + 1
//     if (randomTime > 5) {
//         setTimeout(() => {
//             reject("rejected becouse of waitting.it took " + randomTime + " ms")

//         }, `${randomTime}000`)
//     } else {
//         setTimeout(() => {
//             resolve("resolved in " + randomTime + " ms")
//         }, `${randomTime}000`)
//     }
// })

// promise.then((data) => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })




// ============================= Promise.race()
// დროის მიხედვით რომეიც უფრომმალე შესურლება იმას დააბრუნებს გინდ დარეჯექთებული იყოს გინდ დარესოლვებული



// შექმენით რაღაცა პრომისი რომელიც რაიმე მნიშვნელობას დააბრუნებს გარკვეული დროის(1 წამიდან 10 წამამდე) შემდეგ. შექმენით ასევე მეორე პრომისი, რომელიც იქნება დროის ლიმიტერი - დაარეჯექთებს რაიმე ერორს, ვთქვათ 5 წამში. გამოიყენეთ race მეთოდი

// let promise = new Promise((resolve, reject) => {
//     let randomTime = Math.floor(Math.random() * 10) + 1
//     setTimeout(() => {
//         resolve("resolved , it took " + randomTime + "000 ms")
//     }, `${randomTime}000`)
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("rejected")
//     }, 5000)
// })


// Promise.race([promise, promise2])
//     .then(data => console.log(data))
//     .catch(error =>{
//         console.log(error + '// becouse other promise took too much time')
//     })



function PromiseGenerator(content, time) {
    let willResolve = Math.floor(Math.random() * 2)


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (willResolve === 1) {
                resolve(content)
            } else {
                reject("Promise rejected")
            }
        }, time)
    })
}



function timeLimit(promise, limit) {
    let timelimitter = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("This promise is taking long time")
        },limit)
    })

    Promise.race([promise, timelimitter])
}



timeLimit(PromiseGenerator("info",1000) , 2000).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})
// PromiseGenerator("this is user videos", 2000)
//     .then(data=>{
//         console.log(data)
//     }).catch(error => {
//         console.log(error)
//     })


// Promise.race([PromiseGenerator("this is user videos", 2000),PromiseGenerator("this is user videos1", 1000),PromiseGenerator("this is user videos3", 3000)])
// .then(data=>{
//     console.log(data)
// })