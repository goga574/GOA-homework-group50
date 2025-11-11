let regButton = document.querySelector(".regbutton")

let logButton = document.querySelector(".logbutton")

let regName = document.getElementById("regname")

let regEmail = document.getElementById("regemail")

let regPassword = document.getElementById("regpassword")

let logName = document.getElementById("logname")

let logEmail = document.getElementById("logemail")

let logPassword = document.getElementById("logpassword")






function Constructor(name,email,password){
    this.name = name
    this.email = email
    this.password = password
}

let accs = JSON.parse(localStorage.getItem("accs")) || []

regButton.addEventListener("click" , () =>{
    let obj = new Constructor(regName.value,regEmail.value,regPassword.value)
    accs.push(obj)
    localStorage.setItem("accs" , JSON.stringify(accs))
})


logButton.addEventListener("click" , ()=>{
    let parse = JSON.parse(localStorage.getItem("accs"))
    for(let acc of parse){
        if(acc.name === logName.value && acc.email == logEmail.value && acc.password == logPassword.value){
            alert("you are logged in")
            console.log(acc)
            localStorage.setItem("currentAcc" , JSON.stringify(acc))

        }
    }
})

