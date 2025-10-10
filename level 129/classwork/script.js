// function getWeatherApi() {
//     return new Promise((resolve, reject) => {
//         resolve("snow")
//     })
// }


// function getWeather(data) {
//     if (data == "snow") {
//         console.log("snow.pnj")
//         return "❄️"
//     } else if (data == "sunny") {
//         console.log("sunny.pnj")
//         return "☀️"
//     }

// }


// function getIcon(data) {
//     console.log(data)
//     if(data == "❄️"){
//         return "-10C"
//     }else{
//         return "10C"
//     }
// }


// function getTemp(data) {
//     console.log(data)
// }


// function error(data) {
//     console.log("rejected => " + data)
// }



// getWeatherApi()
//     .then(getWeather)
//     .then(getIcon)
//     .then(getTemp)
//     .catch((value)=>{
//         console.log("error" + value)
//     })
//     .finally(()=>{
//         console.log("finished")
//     })































// ==============================================================


// function getApi() {
//     return new Promise((resolve, reject) => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//             .then((data) => {
//                 resolve(data.json())
//             })


//     })
// }


// function getData(response) {
//     response.map(item => {
//         document.body.innerHTML+=`<p style= "border:2px solid red">${item.title}</p>`
//         console.log(item.id)
//     })
// }


// getApi()
//     .then(getData)
//     .catch(() => {
//         console.log("error")
//     })
//     .finally(() => {
//         console.log("Alll DONEEE")
//     })4











// =======================================



// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         reject("gela")
//     })
// }


// getPromise().then(data=>{
//     console.log(data)
// }).catch(data=>{
//     console.log(data + " rejected")
// })


function getData(){
    return new Promise((resolve,reject)=>{
        let api = fetch("https://jsonplaceholder.typicode.com/todos")
        .then(data => { 
            resolve(data.json())
        })
        
    })
}
getData()
    .then(data => {
        console.log(data)
    })