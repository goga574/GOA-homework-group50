// 4) შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე.

// მაგალითი:
// <h1>User Data</h1>
// <p>Fullname: #{fullname}</p>
// ...


let form = document.querySelector("form")



function constructorObj(username,email,password){
    this.username = username
    this.email = email
    this.password = password

}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let div = document.querySelector("div")

    let newObj = new constructorObj(e.target.username.value,e.target.email.value,e.target.password.value)
    div.innerHTML += `
    <p>username : ${newObj.username}</p>
    <p>user Email : ${newObj.email}</p>
    <p>user Password : ${newObj.password}</p>`
    
})