const apiKey = "a5f107d2"

let searchbtns = document.querySelectorAll(".bothbtn")

let maindiv = document.querySelector(".mainDiv")

let nameinput = document.querySelector(".movienameinput")

let genreInput = document.querySelector(".moviegenreinput")

searchbtns[1].addEventListener("click", async () => {
    let name = nameinput.value
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
    let data = await response.json();



    console.log(data);

    showOnWeb(data[0].show.name, data[0].show.genres[0], data[0].show.network.country.name, data[0].show.image.original)



})


searchbtns[0].addEventListener("click", async () => {
    

    let name1 = genreInput.value.toLowerCase()

    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${name1}`)
    let data = await response.json()

    maindiv.innerHTML = ""

    let found = false

    for (let item of data) {           
        let show = item.show;         
        if (show.genres) {             
            let match = false;
            for (let g of show.genres) {      
                if (g.toLowerCase() === name1) { 
                    match = true
                    break                
                }
            }
            if (match) {                 
                found = true
                let country = show.network ? show.network.country.name : "wrong"
                let image = show.image ? show.image.original : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Foops-comics&psig=AOvVaw1nc3i50wEatwJMGW0GqPIb&ust=1758832957542000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDNnMGh8o8DFQAAAAAdAAAAABAE"
                showOnWeb(show.name, show.genres.join(", "), country, image)
            }
        }
    }

    if (!found) {
        maindiv.innerHTML = `<p>No shows found for genre: ${name1}</p>`
    }


})



function showOnWeb(name, genre, country, url) {

    maindiv.innerHTML += `
            <div class="child">
                <div class="bg" style="background-image: url('${url}')"></div>
                <img src="${url}" alt="" class="movieimg">
                <div class="movieoptions">
                    <h3 class="movie-name">${name}</h3>
                    <h2 class="movie-genre">Genre:${genre}</h2>
                    <p class="movie-country">${country}</p>
                </div>
            </div>
`
}

















































// =======================================

let loginsignup = document.querySelector(".login-and-signup")

let animation = document.querySelector(".success")

let logged = JSON.parse(localStorage.getItem("islogin"))

let info = JSON.parse(localStorage.getItem("accs"))

let ifLogged = document.querySelector(".iflogged-div")

let userP = document.querySelector(".username")

let arrow = document.querySelector(".arrow1")

let logout = document.querySelector(".logout")

let logoutp = document.querySelector(".logoutp")

let currentUser = JSON.parse(localStorage.getItem("currentUser"))






arrow.addEventListener("click", () => {
    arrow.classList.toggle("arrow1");
    arrow.style.transition = "0.3s"


    if (arrow.classList.contains("arrow1")) {
        logout.style.display = "flex"
    } else {
        logout.style.display = "none"
    }
})

if (logged) {
    animation.style.animation = "success 3s  1s linear 1"
    loginsignup.style.display = "none"

    ifLogged.style.display = "flex"


}

if (currentUser && logged) {
    userP.textContent = currentUser.name
} else {
    userP.textContent = "Guest"
}


logoutp.addEventListener("click", () => {
    localStorage.setItem("islogin", "false")
    localStorage.removeItem("currentUser")

    window.location.reload()
})


for (let i of searchbtns) {
    i.addEventListener("click", () => {
        if (!logged && !currentUser) {
            alert("please register")
        }
    })
}