// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(46)
//         },1)
//     })
// }

async function start(){
    try{
        // სცადე რაღაც კოდი
        let data = await fetch("https://jsonplaceholder.typicode.com/todos")
        let result = await data.json()
        console.log(result )   
    
    }catch(e){
        // დაიჭირე ერორი
        console.log("Error")
    }


}

start()

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

