// try{    
//     let num = 10
//     if(num === 10){
//         console.log(num + 5)
//     }else{
//         throw new Error("i am error")
//     }
// }
// catch(e){
//     console.log(e)
// }finally{
//     console.log("finallu")
// }
// try{
//     let num = 10
//     console.log(num)
//     throw new Error("i am error")
// }catch(e){
//     console.error(e)
// }

// function gayofa(num1,num2){
//     if(num2 === 0){
//         throw new Error("can not divide by 0")
//     }else{
//         return num1/num2
//     }
// }

// // console.log(gayofa(10,0))


// try{
//     let result = gayofa(30,10)
//     console.log(result)
// }catch(e){
//     console.error(e)
// }finally{
//     console.log("this is finally block")
// }\


// =============================allsettled

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("this Promise is rejected")
//     }, 1000)
// })


// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("this promise is resolved too")
//     })
// })



// Promise.allSettled([promise1, promise2])
//     .then(data=>{
//         console.log(data)
//         for(let i of data){
//             if(i.status === "rejected"){
//                 console.log("The reason of this is " + i.reason)
//             }else{
//                 console.log("The value of this is "+ i.value)
//             }
//         }
//     })


// =====================any
// აბრუნებს პრომისებიდან პირველიდ არეოლვებული პრომისის შედეგს , თუ ყველა რეჯექთია მაშინ ერორი გვაქვს(შეგვიძლია გადავიყვანოთ catch ში)

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("this Promise is resolved1")
    }, 1000)
})


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this promise is resolved ")
    },500)
})


Promise.any([promise1,promise2])
    .then(data =>{
        console.log(data)
    }).catch(e =>{
        console.log(e.errors)
    })


