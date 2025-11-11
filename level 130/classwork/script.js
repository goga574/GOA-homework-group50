// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(46)
//         },1)
//     })
// }

// async function start(){
//     try{
//         // სცადე რაღაც კოდი
//         let data = await fetch("https://jsonplaceholder.typicode.com/todos")
//         let result = await data.json()
//         console.log(result )   
    
//     }catch(e){
//         // დაიჭირე ერორი
//         console.log("Error")
//     }


// }

// start()

// ==================lesson===============

// responss

// 200 - success
// 201 - created successfully
// 400 -  bed request
// 401 - unauthorized
// 403 - forbidden
// 404 - not found 
// 500 - server error


// dealing with bed request



// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("acc info")
//     },1000)
// })

// // console.log(promise1)

// // promise1.then((data)=>{
// //     console.log(data)
// // })


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("recieve posts")
//     },2000)
// })



// // promise2.then((data)=>{
// //     console.log(data)
// // })





// Promise.all([promise1,promise2])
//     .then((data)=>{
//         console.log(data)
//     })











//
// შექმენით 3 პრომისი,პირველი ფრომისი დაარესოლვებს მომხმარებლის ინფოს ობიექტის სახით , მეორე პრომისი მომხმარებლის პოსტებს , მესამე ფრომისმა დაარესოლვოს მომხმარებლის მეგობრები ლისტის სახით ,თიო მეგობარი იქნება ობიექტი ,თითეულ პრომისს შესრულებისს ახვადასხვა დრო ქონდეს , შემდეგ სამივე ფრომისი გაუშვით პარალელურად, გადაუარეთ დიდი ფრომისის სიას დდაბეჭდეთ ყველა ინფორმაცია


let promise1 = new Promise((resolve,reject) =>{
    let userInfo = {
        name:"giorgi",
        surname:"chalauri",
        age:24
    }
    setTimeout(()=>{
        resolve(userInfo)
    },1000)
})


let promise2 = new Promise((resolve,reject) =>{
    let postInfo = [
        {postname:"gelas",postData:"cars"},
        {postname:"gios",postData:"clothes"},
        {postname:"anas",postData:"parfume"}
    ]
        
    
    setTimeout(()=>{
        resolve(postInfo)
    },2000)
})

let promise3 = new Promise((resolve,reject) =>{
    let friendInfo = [
        {friendName:"gela",friendAge:19},
        {friendName:"gio",friendAge:3},
        {friendName:"ana",friendAge:20}
    ]
        
    
    setTimeout(()=>{
        resolve(friendInfo)
    },3000)
})


let allPromsie = [promise1,promise2,promise3]

Promise.all(allPromsie).then(data=>{
    for(let i of data){
        console.log(i)
    }
})

