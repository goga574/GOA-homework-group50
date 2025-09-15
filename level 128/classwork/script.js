


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







// 1 cw

// შექმენით ფუნქცია რომელიც დააბრუნებს  promise - ს შემდეგ მიიღეთ ფრომისი,წაიკითხეთ მის მიერ დარესოლვებული მნიშვნელობა და დაბეჭდეთ შესაბამისი აიქონი mniSvnelobidan gamomdinare


function createPromise(weather){
    return new Promise((resolve,reject)=>{
        if(weather === "weather"){
            resolve("snowy")
        }else{
            reject("snowy")
        }
    })
}

function resolveCase(data){
    if(data == "sunny"){
        console.log("☀️")
    }else if(data == "snowy"){
        console.log("❄️")
    }else if(data == "rainy"){
        console.log("🌧️")
    }
}

function rejectCase(data){
    console.log(`${data} is rejected`)
}



createPromise("weather").then(resolveCase,rejectCase)