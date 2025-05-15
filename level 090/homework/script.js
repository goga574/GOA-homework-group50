let showsidebar = document.querySelector(".showsidebar")

let sidebar = document.querySelector(".sidebar")

let quit = document.querySelector(".quit")

showsidebar.addEventListener("click", () => {
    sidebar.style.right = "0px"
})

quit.addEventListener("click", () => {
    sidebar.style.right = "-300px"
})



let addButton = document.querySelectorAll(".addbutton")

let card = document.querySelectorAll(".pcdiv")

let count = 0

let priceCounter = 0

let quantity = document.querySelectorAll(".totamount")

let totalPrice = document.querySelectorAll(".totprice")



for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", () => {
        let info = card[i]
        let img = info.querySelector(".img").src
        let name = info.querySelector(".pcname").textContent
        let price = info.querySelector(".pcprice").textContent
        count++
        quantity[0].textContent = count


        let tot = priceCounter += Number(price)
        totalPrice[0].textContent = tot


        let newDiv = document.createElement("div")
        newDiv.classList.add("pc-cart")

        let img1 = document.createElement("img")
        img1.classList.add("change")
        img1.src = img

        let childDiv = document.createElement("div")
        childDiv.classList.add("cart-info")

        let nameP = document.createElement("p")
        nameP.textContent = name

        let priceP = document.createElement("p")
        priceP.textContent = `$${price}`

        let newButton = document.createElement("button")
        newButton.classList.add("remove")
        newButton.textContent = "Remove"
        


        sidebar.appendChild(newDiv)
        newDiv.appendChild(img1)
        newDiv.appendChild(childDiv)
        childDiv.appendChild(nameP)
        childDiv.appendChild(priceP)
        childDiv.appendChild(newButton)
        console.log(newDiv)



    })
}