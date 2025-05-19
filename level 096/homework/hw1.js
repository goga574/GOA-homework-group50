// 4) შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე.

// მაგალითი:
// <h1>User Data</h1>
// <p>Fullname: #{fullname}</p>
// ...


let form = document.querySelector("form")



function constructorObj(username,email,password){
    this.username = username
    this.email = email
    this.passwprd = passwor

}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let body = document.body

    let newObj = new constructorObj(e.target.username.value,e.target.email.value,e.target.password.value)
    body.innerHTML= `<h1>${newObj.username}</h1>`
       
})