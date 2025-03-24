// let img = document.getElementById("img")
// let next = document.getElementById("nextpic")
// let prev = document.getElementById("previous")

let x = 0

images = ["first.png","second.png","third.png"]

nextpic.addEventListener("click",function(){
    x++
    if(x>images.length-1){
        x = 0
    }
    img.src = images[x]
})

previous.addEventListener("click",function(){
    x--
    if(x<0){
        x = images.length - 1
    }
    img.src = images[x]
})