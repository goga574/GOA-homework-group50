// 2) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და მეილი ამ მონაცემების შექმენით ობიექტი შეგიძლიათ გამოიყენოთ კონსტრუქტორი, ეს ობიექტი დაამატეთ სიაში და შექმენით ექაუნთები, ეს ინფორმაცია უნდა ინახებოდეს localstorage ში, ყოველ ღილაკზე დაჭერის დროს უნდა შეიქმნას ახალი ექაუნთი(ობიექტი), დაემატოს ექაუნთებისთვის განკუთვნილ სიაში და განახლდეს localstorage


let button = document.querySelector(".button")
let form = document.querySelector("form")

function Constructor(name,surname,password){
    this.name = name
    this.surname = surname
    this.password = password
}

let accs = JSON.parse(localStorage.getItem("accs")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = new Constructor(e.target.name.value,e.target.surname.value,e.target.password.value)
    accs.push(obj)
    localStorage.setItem("accs",JSON.stringify(accs)) 
    console.log(JSON.parse(localStorage.getItem("accs"))) 
})