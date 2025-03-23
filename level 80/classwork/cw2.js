// 2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.



let  img = document.getElementById("pic")

// img.addEventListener("click", function(){
//     img.src = "th (1)..jpg"
// })

img.addEventListener("mouseover", function(){
    img.src = "./th.pnj"
})
