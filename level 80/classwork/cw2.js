// 2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.



let  img = document.getElementById("pic")

img.addEventListener("mouseover", function(){
    img.src = "img2.jpg"
})

img.addEventListener("mouseout", function(){
    img.src = "img1.jpg"
})
