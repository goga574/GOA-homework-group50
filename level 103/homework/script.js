let itemsDiv = document.querySelector(".items")
let addBtn = document.querySelector("#add-btn")
let input = document.getElementById("input")

let complateUl = document.querySelector(".complated-div")
let itemList = JSON.parse(localStorage.getItem("itemList")) || []
let complateList = JSON.parse(localStorage.getItem("complate")) || []












addBtn.addEventListener("click", () => {

    // add input values in list
    itemList.push(input.value)

    // save them in localstorage
    localStorage.setItem("itemList", JSON.stringify(itemList))

    // clear itemsDiv ანუ ul
    itemsDiv.innerHTML = ""

    // call render function
    render()

    // clear input value
    input.value = ""

    console.log(itemList)

})






















let remove = (e) => {
    let index = Number(e.target.id)
    itemList.splice(index, 1)
    localStorage.setItem("itemList", JSON.stringify(itemList))

    itemsDiv.innerHTML = ""

    render()
}












let parentLi = itemsDiv
let isEdit = false
let index










// edit function
let edit = (e) => {
    index = Number(e.target.id)
    parentLi = e.target.parentElement.parentElement
    isEdit = !isEdit

    parentLi.children[0].setAttribute("contenteditable", isEdit)

    parentLi.children[0].focus()

    if (isEdit == false) {
        let newValue = parentLi.children[0].textContent
        itemList[index] = newValue


        localStorage.setItem("itemList", JSON.stringify(itemList))


    }
    // parentLi.children[0].addEventListener("focus" , (e) =>{

    // })



}










document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        isEdit = false
    }
    parentLi.children[0].setAttribute("contenteditable", isEdit)


    let newValue = parentLi.children[0].textContent
    itemList[index] = newValue


    localStorage.setItem("itemList", JSON.stringify(itemList))


})








// complate function
let complate = (e) => {
    
    let index = Number(e.target.id)

    
    
    
    complateList.push(itemList[index])
    remove(e)
    complateUl.innerHTML = ""
    localStorage.setItem("complate", JSON.stringify(complateList))
    renderForComplate()


    
    

    
    
}




// render function
let render = () => {

    itemList.map((item, index) => {
        // create paragraph and list item
        let li = document.createElement("li")
        let p = document.createElement("p")

        // create icon's div and icons in it
        let iconsDiv = document.createElement("div")
        let editBtn = document.createElement("img")
        let completeBtn = document.createElement("img")
        let deleteBtn = document.createElement("img")
        deleteBtn.id = index
        editBtn.id = index
        // change p's textContent 
        p.textContent = item

        // give elements classes and src's
        editBtn.src = "./images/editbtn.png"
        completeBtn.src = "./images/complete.png"
        deleteBtn.src = "./images/delete.png"
        editBtn.className = "editbtn"
        completeBtn.className = 'completebtn'
        deleteBtn.className = "deletebtn"
        iconsDiv.className = 'iconsdiv'
        p.className = "p"
        completeBtn.id = index
        // append elements
        itemsDiv.appendChild(p)
        itemsDiv.appendChild(li)
        li.appendChild(p)
        li.appendChild(iconsDiv)
        iconsDiv.appendChild(editBtn)
        iconsDiv.appendChild(completeBtn)
        iconsDiv.append(deleteBtn)

        // clear input field
        input.value = ""

        // delete items from website
        deleteBtn.addEventListener("click", remove)
        editBtn.addEventListener("click", edit)

        completeBtn.addEventListener("click" , complate)
    })
}

render()

let renderForComplate = () => {
    complateUl.innerHTML = ""
    complateList.map((item, index) => {
        // create paragraph and list item
        let li = document.createElement("li")
        let p = document.createElement("p")
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"


        deleteBtn.id = index
        // change p's textContent 
        p.textContent = item

        // give elements classes and src's
       
    
        deleteBtn.className = "add-btn2"
        p.className = "p"
        

        // append elements
        complateUl.appendChild(li)
        li.appendChild(p)
        li.appendChild(deleteBtn)
        
        // clear input field
        input.value = ""
        // delete items from website
         
        deleteBtn.addEventListener("click" , (e)=>{
            let index = Number(e.target.id)
            complateList.splice(index,1)
           
            localStorage.setItem("complate", JSON.stringify(complateList))

           renderForComplate()

            
            
        })
        
    })
}
// localStorage.clear()
renderForComplate()