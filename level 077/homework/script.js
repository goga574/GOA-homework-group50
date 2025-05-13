let light = document.querySelectorAll(".light")

let dark = document.querySelectorAll(".dark")

let p=document.querySelectorAll("p")

let li = document.querySelectorAll("li")

let div = document.querySelectorAll(".same")
let h2 = document.querySelectorAll("h2")
let h1 = document.querySelectorAll("h1")
let h6 = document.querySelectorAll("h6")
let h5 = document.querySelectorAll("h5")
let h4 = document.querySelectorAll("h4")
let span = document.querySelectorAll("span")
let body = document.body



light[0].addEventListener("click",function(){
    for(let i of p){
        i.style.color="#000"
    }
    for(let i of li){
        i.style.color="#000"
    }
    for(let i of h2){
        i.style.color="#000"
    }
    for(let i of h1){
        i.style.color="#000"
    }
    for(let i of h6){
        i.style.color="#000"
    }
    body.style.backgroundColor = "#f1f1f1"

    for(let i of div){
        i.style.backgroundColor="#fff"
    }
    for(let i of h5){
        i.style.color="#000"
    }
    for(let i of h4){
        i.style.color="#000"
    }
    for(let i of span){
        i.style.color="#ffa03f"
    }
})



















dark[0].addEventListener("click",function(){
    for(let i of p){
        i.style.color="#fff"
    }
    for(let i of li){
        i.style.color="#fff"
    }
    for(let i of h2){
        i.style.color="#fff"
    }
    for(let i of h1){
        i.style.color="#fff"
    }
    for(let i of h6){
        i.style.color="#fff"
    }
    body.style.backgroundColor = "#100f0f"

    for(let i of div){
        i.style.backgroundColor="#000"
    }
    for(let i of h5){
        i.style.color="white"
    }
    for(let i of h4){
        i.style.color="white"
    }
    for(let i of span){
        i.style.color="#ffa03f"
    }
})


