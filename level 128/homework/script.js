// დაწერე სამი Promise, რომლებიც აბრუნებენ "Step 1", "Step 2", "Step 3" თითოეული 1 წამიანი დაყოვნებით. თითოეული უნდა შესრულდეს მხოლოდ მაშინ, როცა წინა დასრულდება. გამოიყენე მხოლოდ then() ჩეინინგი.



// let step1 = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("step1")
//         },1000)
//     })

// }




// let step2 = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("step2")
//         },1000)
//     })

// }




// let step3 = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("step3")
//         },1000)
//     })

// }

// step1().then((result1) =>{
//     console.log(result1)
//     return step2()
// })

// .then(result2 =>{
//     console.log(result2)
//     return step3()
// })
// .then(result3 =>{
//     console.log(result3)
// })




// 2️⃣ შექმენი Promise, რომელიც აბრუნებს რიცხვს (მაგ. 2). შემდეგი then()-ებში გაამრავლე ეს რიცხვი ჯერ 2-ზე, შემდეგ მიღებული შედეგი 3-ზე, შემდეგ 4-ზე. ბოლო then()-ში დაბეჭდე საბოლოო შედეგი


// function Promisemaker(){
//     return new Promise((resolve)=>{
//         resolve(2)
//     })
// }

// Promisemaker()
//     .then(result =>{
//         return result*2
//     })
//     .then(result =>{
//         return result * 3

//     })
//     .then(final =>{
//         console.log("final is " + final)
//     })



// დაწერე Promise, რომელიც 2 წამის შემდეგ აბრუნებს მომხმარებლის სახელს (მაგ. "Gio"). შემდეგ then()-ში დააბრუნე ტექსტი "Hello, Gio!" და ბოლოს დაბეჭდე ეს ტექსტი


// function promiseMaker(){
//     return new Promise(function(resolve){
//         setTimeout(() => {
//             resolve("goga")

//         }, 2000);
//     })
// }

// promiseMaker()
//     .then(result =>{
//         console.log(`Hello ${result}`)
//     })




// შექმენი Promise, რომელიც აბრუნებს შემთხვევით რიცხვს 1-დან 10-მდე. თუ რიცხვი მეტია 5-ზე, პრომისი დაარეზოლვე, შემდეგ კი then()-ში დაბეჭდე "High number: X", ხოლო თუ 5-ზე ნაკლებია, შედეგი დაარეჯექთე. შექმენი ასევე ერრორ ჰენდლერ ფუნქცია, რომელიც ამ დარეჯექთებულ შედეგს დაპრინტავს.

// let number = Math.floor(Math.random()*10)
// function promiseMaker(){
//     return new Promise(function(resolve,reject){
//         if(number > 5){
//             resolve(number)
//         }else{
//             reject(number)
//         }
//     })
// }

// function resolveCase(data){
//     console.log(`High number : ${data}`)
// }

// function rejectCase(data){
//     console.log(`low number : ${data}`)
// }



// promiseMaker().then(resolveCase,rejectCase)



// შექმენი Promise, რომელიც აბრუნებს ინფორმაციას მომხმარებლის შესახებ. პრომისი უნდა აბრუნებდეს ინფორმაციას მომხმარებლის შესახებ( მისი სახელი, გვარი, ასაკი, სქესი და ა.შ.) ობიექტის სახით. პრომისი შიგნით შექმენით ორი ცვლადი: isUserFound და timeToFindUser. პირველში, რანდომულად დააგენერეითეთ 0 ან 1, ხოლო მეორეში რიცხვი 0 დან 10 მდე. Promise მომხმარებლის ინფორმაციას უნდა აბრუნებდეს იმ შემთხვევაში თუ isUserFound === 1 და ამას იმდენი წამი უნდა ანდომებდეს დროს(setTimeout) რამდენიც არის timeToFindUser_ში. თუ isUserFound აღმოჩნდა 0, მაშინ დაარეჯექთეთ რაიმე შეტყობინება. ამ პრომისზე გამოიძახეთ then მეთოდი, რომელსაც გადასცემთ ორ არგუმენტს. ერთ ფუნქციას, რომელიც დაბეჭდავს მომხმარებლის ინფორმაციას, ხოლო მეორე ფუნქციას, რომელიც დაბეჭდავს ერორს 

let obj = {
    name: "goga",
    surname: "chalauri",
    age: 20,
    seqsi: "Male"
}


function promiseMaker() {
    let isUserFound = Math.floor(Math.random() * 2)
    let timeToFindUser = Math.floor(Math.random() * 10)
    console.log(timeToFindUser)
    return new Promise((resolve, reject) => {
        if (isUserFound === 1) {
            setTimeout(() => {
                resolve(obj)
            },`${timeToFindUser}000`)
        }else{
            reject("You have not access")
        }
    })
    
}


function resolveCase(data){
    console.log("User Info Below ")
    console.log(data)
}

function rejectCase(data){
    console.log(data)
}


promiseMaker().then(resolveCase,rejectCase)