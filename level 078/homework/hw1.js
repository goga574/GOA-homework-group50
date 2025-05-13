let img = document.getElementById("img")
let next = document.getElementById("nextpic")
let prev = document.getElementById("previous")


let images = ["first.png","second.png","third.png"]

let index  = 0

next.addEventListener("click",function(){       
    if(index == images.length-1){
        index = 0
        console.log(index)
    }else{
        index+=1
        console.log(index)
    }
    img.src = images[index]
    
})

prev.addEventListener("click",function(){
    if(index == 0){
        index = images.length-1
        console.log(index)

    }else{
        index-=1
        console.log(index)
    }
    img.src = images[index]
})