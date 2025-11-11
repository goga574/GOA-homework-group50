let regspan = document.querySelector(".reg-span")

let loginspan = document.querySelector(".login-span")

let coverDiv = document.querySelector(".coverdiv")


regspan.addEventListener("click", () => {
    coverDiv.style.animation = "cover 0.5s linear forwards"

})

loginspan.addEventListener("click", () => {
    coverDiv.style.animation = "cover2 0.5s linear forwards"
})


// ================================ reg form ====================================


let regForm = document.querySelector(".reg-form")

let validate = document.querySelectorAll(".validate")

let validate2 = document.querySelectorAll(".validate2")



let accs = JSON.parse(localStorage.getItem("accs")) || [] //list of accs 

regForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let regname = regForm.elements["regname"].value.trim()
    let regemail = regForm.elements["regemail"].value.trim()
    let regpass = regForm.elements["regpass"].value.trim()

    if (!regname) {
        validate[0].style.display = "block"
        return
    } if (!regemail) {
        validate[1].style.display = "block"
        return
    } if (!regpass) {
        validate[2].style.display = "block"
        validate2[1].style.display = "none"
        return
    } if (regpass.length < 5) {
        validate2[1].style.display = "block"
        validate[2].style.display = "none"
        return
    } else {
        let obj = {
            name: regname,
            email: regemail,
            password: regpass
        }
        accs.push(obj)



        validate[0].style.display = "none"
        validate[1].style.display = "none"
        validate[2].style.display = "none"
        validate2[1].style.display = "none"

        localStorage.setItem("accs", JSON.stringify(accs))



        coverDiv.style.animation = "cover2 0.5s linear forwards"

    }
    regForm.elements["regname"].value = ""
    regForm.elements["regemail"].value = ""
    regForm.elements["regpass"].value = ""

    // ============localstorage================
})

// localStorage.clear()



// ===============login=================================

let loginForm = document.querySelector(".login-form")

let validate3 = document.querySelectorAll(".validate3")


let validate4 = document.querySelectorAll(".validate4")

let isLogin = false

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let loginName = loginForm.elements["loginName"].value.trim()
    let loginPass = loginForm.elements["loginPass"].value.trim()

    if (!loginName) {
        validate3[0].style.display = "block"
        validate4[0].style.display = "none"
        return
    } if (!loginPass) {
        validate3[1].style.display = "block"
        validate4[1].style.display = "none"
        return
    } else {
        let parsedStorage = JSON.parse(localStorage.getItem("accs"))

        let found = false

        for (let i of parsedStorage) {
            if (i.name === loginName && i.password === loginPass) {
                isLogin = true
                
                localStorage.setItem("currentUser" , JSON.stringify(i))
                
                loginForm.elements["loginName"].value = ""
                loginForm.elements["loginPass"].value = ""

                found = true

                window.location.href = "index.html";

            } 
        }

        if (!found) {
            validate4[0].style.display = "block"
            validate4[1].style.display = "block"
            validate3[0].style.display = "none"
            validate3[1].style.display = "none"

        }
        
        localStorage.setItem("islogin", JSON.stringify(isLogin))
    }

})
// localStorage.clear()