


// function recieveData(data){
//     let weather = data
//     console.log(weather)
// }


// function getWeather(callback){
//     setTimeout(()=>{
//         callback("snow")
//     },1000)
// }


// getWeather(recieveData)


// =============================

// promise
// promise maker | promise reciever


// function getWeatherApi(){
//     return new Promise(function(resolve,reject){   
//         resolve("sunny") // ეს არის ქვემოთ ფუნქციებში გადაცემული არგუმენტის მნშვნელობა ანუ data
//     })
// }


// function getWeather(data){  //უნდა გადაეცეს არგუმენტი
//     if(data == "snow"){
//         console.log("snow.pnj")
//     }else if(data == "sunny"){
//         console.log("sunny.pnj")
//     }
// }


// function error(data){ //უნდა გადაეცეს არგუმენტი
//     console.log(data)
// }


// getWeatherApi().then(getWeather,error) //პირველია არგ არის resolve ისთვის და მეორე არის reject ისთვის then ში







// =======================================


// Promise -- პირობა / დაპირება --> 
// შესრულებული - fullfulled ,
// გატეხილი --> rejected, 
// შესრულების პროცესში -->pending

// promise maker  და promise receiver


// function getWeatherApi() {
//     return new Promise((resolve, reject) => {
//        resolve("snow")
//     })
// }






// getWeatherApi().then((data)=>{
//     if (data === "snow") {
//         console.log("❄️")
//     } else if (data == "sunny") {
//         console.log("☀️")
//     }
// } , (data)=>{
//     console.log("error on " + data)
// })





// ========================================
// Promise - პირობა - დაპირება

// არსებობს სამი სახის პრომისი

// გატეხილი პირობა - broken promise(rejected)

// შესრულებული პირობა - success promise(fulfilled)

// პირობა რომელიც შესრულების პროცესშია - pending(pending)





// ==============

// Promise იყოფა ორად Promis maker და Promise Reciever

// function getWeatherApi(){
//     return new Promise((resolve,reject)=>{
//         resolve("error")
//     })
// }

// function getWeather(data){
//     console.log(data)
// }


// getWeatherApi().then(getWeather)



function getData(){
    return new Promise((resolve,reject)=>{
        resolve("rainy")
    })
}



getData().then((data)=>{
    if(data =="snow"){
        console.log("❄️")
    }else if(data == "sunny"){
        console.log('☀️')
    }else if(data == "rainy"){
        console.log("🌧️")
    }
},(reject)=>{
    console.log("enter only weather")
})














