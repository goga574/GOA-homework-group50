let addButton = document.querySelector(".add-item")

let itemsDiv = document.querySelector(".all-items")

let input = document.querySelector(".input")

let deletebut = document.querySelectorAll(".delete-but")

let div = document.querySelector(".item")

let allInfo = JSON.parse(localStorage.getItem("items")) || []

addButton.addEventListener("click", ()=>{
    let added = document.createElement("div")
    added.classList.add("item")

    let p = document.createElement("p")
    p.classList.add("item-name")
    p.textContent = input.value
    
    let deletebut = document.createElement("button")
    deletebut.classList.add("delete-but")
    deletebut.innerHTML = "Delete"


    itemsDiv.appendChild(added)
    added.appendChild(p)
    added.appendChild(deletebut)

    allInfo.push(input.value)
    localStorage.setItem("items" , JSON.stringify(allInfo))
})

for(let element of allInfo){
    let added = document.createElement("div")
    added.classList.add("item")

    let p = document.createElement("p")
    p.classList.add("item-name")
    p.textContent = element
    
    let deletebut = document.createElement("button")
    deletebut.classList.add("delete-but")
    deletebut.innerHTML = "Delete"

        deletebut.addEventListener("click", () => {
        itemsDiv.removeChild(added);

        // Find index of item and remove it
        let index = allInfo.indexOf(p.textContent);
        if (index !== -1) {
            allInfo.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(allInfo));
        }
    });


    itemsDiv.appendChild(added)
    added.appendChild(p)
    added.appendChild(deletebut)

    allInfo.push(input.value)
    localStorage.setItem("items" , JSON.stringify(allInfo))

    
    
}


