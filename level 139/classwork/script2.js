// let userName = document.querySelector("#name")

// let userSurname =document.querySelector("#surname")

// export {userName,userSurname}



// =================================

// function multy(a,b){
//     return a*b
// }

// export {multy}



let input = document.querySelector("input")

let value = "test"

function test() {
    input.addEventListener("change", (e) => {
        value = e.target.value
        console.log(value)

        return value
    })
}


export default test