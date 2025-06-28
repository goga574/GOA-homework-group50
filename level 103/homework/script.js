let itemsDiv = document.querySelector(".items")
let addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", () => {
    let input = document.getElementById("input")
    

    let li = document.createElement("li")
    let p = document.createElement("p")
    let iconsDiv = document.createElement("div")
    let editBtn = document.createElement("img")
    let completeBtn = document.createElement("img")
    let deleteBtn = document.createElement("img")
    p.textContent = String(input.value)
    

    editBtn.src = "./images/editbtn.png"
    completeBtn.src = "./images/complete.png"
    deleteBtn.src = "./images/delete.png"
    editBtn.className = "editbtn"
    completeBtn.className = 'completebtn'
    deleteBtn.className = "deletebtn"
    iconsDiv.className = 'iconsdiv'
    p.className = "p"

   



    itemsDiv.appendChild(li)
    li.appendChild(p)
    li.appendChild(iconsDiv)
    iconsDiv.appendChild(editBtn)
    iconsDiv.appendChild(completeBtn)
    iconsDiv.append(deleteBtn)

    input.value = ""
   
    deleteBtn.addEventListener("click" , ()=>{
        li.remove()
    })



})