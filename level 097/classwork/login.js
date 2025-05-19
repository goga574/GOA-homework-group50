let regForm = document.querySelector(".register-form")

let allValidation = document.querySelectorAll(".validation-txt")

let validateName = document.querySelector(".validate-name")

let validateSurname = document.querySelector(".validate-surname")

let validateEmail = document.querySelector(".validate-email")

let validatePassword = document.querySelector(".validate-password")

let validateRep = document.querySelector(".validate-rep-password")

let acc = []

regForm.addEventListener("submit", (e) => {
    e.preventDefault()



    let name = e.target.name.value
    let surname = e.target.surname.value
    let email = e.target.email.value
    let password = e.target.password.value
    let repPassword = e.target.repeat.value









    if (repPassword == password) {
        let acc = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            repPassword: repPassword
        }
        // e.target.name.value  = ""
        // e.target.surname.value = ""
        // e.target.email.value = ""
        // e.target.password.value = ""
        // e.target.repeat.value = ""
    }

 




})