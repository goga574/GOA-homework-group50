let tempp = document.querySelector(".celsius")
let location1 = document.querySelector(".location")
let weatherType = document.querySelector(".weathertype")
let feels = document.querySelector(".feelslike")
let humidity = document.querySelector(".humidity")
let visibility = document.querySelector(".visibility")
let wind = document.querySelector(".wind")
let input = document.querySelector(".input")
let submit = document.querySelector(".button")

let apiKey = "95a8027ddfc54abaabe101739252109"   

submit.addEventListener("click", () => {
    let city = input.value.trim()
    if (!city) {
        alert("ქალაქი შეიყვანე!")
        return
    }

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

    fetch(url)
        .then(res => res.json())
        .then(response => {
            location1.textContent = response.location.name
            weatherType.textContent = response.current.condition.text
            tempp.textContent = response.current.temp_c + " °C"
            visibility.textContent = response.current.vis_km + " km"
            feels.textContent = response.current.feelslike_c + " °C"
            humidity.textContent = response.current.humidity + " %"
            wind.textContent = response.current.wind_kph + " km/h"
        })
        .catch(() => {
            alert("ქალაქი ვერ მოიძებნა!")
        })
})