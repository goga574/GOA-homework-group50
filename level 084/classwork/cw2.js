// შექმენით 4 div-კონტეინერი,თითოეულ დივს მიეცით id , თუ რა ფერი უნდა გახდეს ეს დივი დაკლიკების შემდეგ,ასევე ამ დივში უნდა იყოს პარაგრაფი(Click to see color), შემდეგ javaascript-იდან შეამოწმეთ რომელ DIV-ზე განხორციელდა მოვლენა , ასევე შეამოწმეთ ამ DIV- ის ID-ები და მიანიჭეთ შესაბამისი ფერი ,  ასევე შეცვალეთ paragraph-ის textContent იმ ფერის სახელით რა ფერითაც შეიცვლება დივი

let p = document.querySelectorAll("p")
let div = document.querySelectorAll("div")
document.addEventListener("click", function (event) {
    


    for (let i = 0; i <= p.length; i++) {
        p[0].textContent = div[0].id
        p[1].textContent = div[1].id
        p[2].textContent = div[2].id
        p[3].textContent = div[3].id

    }


    event.target.style.backgroundColor = event.target.id

})



// # ვრცელი გზა


// let div = document.querySelectorAll("div")
// let p = document.querySelectorAll("p")

// div[0].addEventListener("click",function(event){
//     console.log(event.target.id)
//     console.log(event.target.tagName + "1")
//     event.target.style.backgroundColor = "red"
//     p[0].textContent = "Red"
// })

// div[1].addEventListener("click",function(event){
//     console.log(event.target.id)
//     console.log(event.target.tagName + "2")
//     event.target.style.backgroundColor = "blue"
//     p[1].textContent = "Blue"
// })
// div[2].addEventListener("click",function(event){
//     console.log(event.target.id)
//     console.log(event.target.tagName + "3")
//     event.target.style.backgroundColor = "green"
//     p[2].textContent = "Green"
// })
// div[3].addEventListener("click",function(event){
//     console.log(event.target.id)
//     console.log(event.target.tagName+ "4")
//     event.target.style.backgroundColor = "yellow"
//     p[3].innerText = "Yellow"
// })

