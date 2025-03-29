let img = document.getElementById("img")
let next = document.getElementById("nextpic")
let prev = document.getElementById("previous")

// let x = 0

// images = ["first.png","second.png","third.png"]

// nextpic.addEventListener("click",function(){
//     x++
//     if(x>images.length-1){
//         x = 0
//     }
//     img.src = images[x]
// })

// previous.addEventListener("click",function(){
//     x--
//     if(x<0){
//         x = images.length - 1
//     }
//     img.src = images[x]
// })



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