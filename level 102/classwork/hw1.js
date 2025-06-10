//   1) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი და მიღებული დაამატეთ სიაში და ეს სია შეინახეთ localstorage ში, ყოველ ღილაკზე დაჭერის დროს და ახალი სახელის შეყვანის დროს სიაში დაემატოს ახალი ელემენტი და localstorage ში განახლდეს ინფორმაციას ხოლო ამის შემდეგ კონსოლში დაბეჭდეთ localstorage დან წამოღებული ინფორმაცია

let input = document.getElementById("input")
let button = document.getElementById("but")

let acc = []
button.addEventListener("click",() =>{
    acc.push(input.value)
    localStorage.setItem("names",JSON.stringify(acc))
    console.log(JSON.parse(localStorage.getItem("names")))
})
