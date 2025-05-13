// <!-- HTML-ში შექმენით რამდენიმე ელემენტი , შემდეგ  javasCript-იდან გაუწერეთ ისეთი ლოგიკა რომ,რომელ ელემენტსაც დააკლიკებთ ,ამ ელემენტის ტექსტის ფერი გახდეს წითელი ასევე კონსოლში დაბეჭდოს ამ კონკრეტული ელემენტის ინფორმაცია(აუცილებლად გამოიყენეთ დღეს ახსნილი event object) -->

let button = document.querySelector("button")
let p = document.querySelector("p")
let h1 = document.querySelector("h1")

button.addEventListener("click", e =>{
    e.target.style.color = "red"
    console.log(e.target)
})


p.addEventListener("click", e =>{
    e.target.style.color = "red"
    console.log(e.target)
})

h1.addEventListener("click", e =>{
    e.target.style.color = "red"
    console.log(e.target)
})
