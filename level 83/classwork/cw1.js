let hexColor = "0123456789abcdef"

let resultColor = ""

let clickButton = document.getElementById("button")

let color = document.getElementById("color") 

let main = document.querySelector("main")

clickButton.addEventListener("click",function(){
    for(let num = 0;num < 6;num++){
        let randomIndex = Math.floor(Math.random()*16)
        resultColor = resultColor + hexColor[randomIndex]
    }
    // console.log("#"+resultColor)
    color.textContent = resultColor
    color.style.color = resultColor
    main.style.backgroundColor = resultColor
    resultColor= "#"
})



