let regForm = document.querySelector(".register-form")

let allValidation = document.querySelectorAll(".validation-txt")

let validateName = document.querySelector(".validate-name")

let validateSurname = document.querySelector(".validate-surname")

let validateEmail = document.querySelector(".validate-email")

let validatePassword = document.querySelector(".validate-password")

let validateRep = document.querySelector(".validate-rep-password")

let height = document.querySelector(".second")

let loginSec = document.querySelector(".first")

let login = document.querySelector(".go-log")

let reg = document.querySelector(".go-reg")

let exitBut = document.querySelectorAll(".exitbut")

let loginIcon = document.querySelector(".login-icon")

let background = document.querySelector(".background")

let loginForm = document.querySelector(".login-form")

let logEmailValidation = document.querySelector(".loginemailvalidate")

let logPasswordValidation = document.querySelector(".loginpasswordvalidate")

let accName = document.querySelector(".accname")

let profileIcon = document.querySelector(".profile")

login.addEventListener("click", () => {
    height.style.display = "none"
    loginSec.style.display = "flex"
})

reg.addEventListener("click", () => {
    loginSec.style.display = "none"
    height.style.display = "flex"

})

exitBut[0].addEventListener("click", () => {
    loginSec.style.display = "none"
    background.style.display = "none"
})

exitBut[1].addEventListener("click", () => {
    height.style.display = "none"
    background.style.display = "none"
})

loginIcon.addEventListener("click", () => {
    background.style.display = "flex"
    loginSec.style.display = "flex"
    height.style.display = "none"
    validateName.style.display = "none"
    validateSurname.style.display = "none"
    validateEmail.style.display = "none"
    validatePassword.style.display = "none"
    validateRep.style.display = "none"
})



let accs = []


function Constructor(name, surname, email, password) {
    this.name = name
    this.surname = surname
    this.email = email
    this.password = password
}

let registerFunc = () => {
    regForm.addEventListener("submit", (e) => {
        e.preventDefault()

        let name = e.target.name.value
        let surname = e.target.surname.value
        let email = e.target.email.value
        let password = e.target.password.value
        let repPassword = e.target.repeat.value


        if (name === "") {
            validateName.style.display = "block"

        }
        else {
            validateName.style.display = "none"
        }


        if (surname === "") {
            validateSurname.style.display = "block"

        } else {
            validateSurname.style.display = "none"
        }


        if (email === "") {
            validateEmail.style.display = "block"
        } else {
            validateEmail.style.display = "none"
        }


        if (password === "") {
            validatePassword.style.display = "block"
        } else {
            validatePassword.style.display = "none"
        }

        if (validateName.style.display == "block" || validateSurname.style.display == "block" || validateEmail.style.display == "block" || validatePassword.style.display == "block" || validateRep.style.display == "block") {
            height.style.height = "500px"
        }


        if (repPassword === "" || repPassword !== password) {
            validateRep.style.display = "block"
        } else if (repPassword == password && name !== "" && surname !== "" && email !== "") {

            accs.push(new Constructor(name, surname, email, password))
            console.log(accs)

            e.target.name.value = ""
            e.target.surname.value = ""
            e.target.email.value = ""
            e.target.password.value = ""
            e.target.repeat.value = ""
            alert("register succesfuly")
            validateRep.style.display = "none"
            height.style.display = "none"
            loginSec.style.display = "flex"
        }
    })
}
registerFunc()

let loginFunc = () => {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()

        let email = e.target.email.value
        let password = e.target.password.value


        if (accs.length === 0) {

            alert("please register")
            loginSec.style.display = "none"
            height.style.display = "flex"
        } else {
            for (let element of accs) {

                if (element.email !== email) {
                    logEmailValidation.style.display = "block"
                    email = e.target.email.value = ""

                }
                if (element.password !== password) {
                    logPasswordValidation.style.display = "block"
                    password = e.target.password.value = ""
                }



                if (element.email == email && element.password == password) {
                    alert("successful login")

                    email = e.target.email.value = ""
                    password = e.target.password.value = ""
                    logEmailValidation.style.display = "none"
                    logPasswordValidation.style.display = "none"
                    background.style.display = "none"

                    loginIcon.style.display = "none"
                    accName.style.display = "block"
                    profileIcon.style.display = "block"
                    accName.textContent = element.name
                }
            }
        }

    })
}

loginFunc()