// 1) შექმენით სარეგიდტრაციო ფორმა და ცხრილი

// ფორმის დადასტურებისას, შეყვანილი მონაცემები უნდა დაემატოს ცხრილში, ახალი რიგის სახით, კომენტარებით ახსენით თითოეული ნაბიჯი


function newConstructor(email,password){
        this.email = email
        this.password = password
    }

    

   



let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let table = document.querySelector("table")

    let obj = new newConstructor(e.target.email.value,e.target.password.value)
   

    table.innerHTML += `
        <tr>
            <td>${obj.email}</td>
            <td>${obj.password}</td>
        </tr>`

})


































































// const form = document.querySelector("form");

// // const defaultInfo = {
// //     email: "blabla@gmail.com",
// //     passsword:"123"
// // }


// function constructor(email,password){
//     this.email = email
//     this.password = password
// }


// form.addEventListener("submit", (e)=>{
//     e.preventDefault()


//     let axali = new constructor(e.target.email.value,e.target.password.value)

//     const entered = {
//         email: e.target.email.value,
//         password: e.target.password.value
//     }

//     const table = document.querySelector("table")
    
//     table.innerHTML += `
//     <tr>
//         <td>${entered.email}</td>
//         <td>${entered.password} </td>
//     </tr>
//     `

// })




// "Hello"