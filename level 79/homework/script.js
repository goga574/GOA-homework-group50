let p = document.querySelector("p")


let func = () => {
    let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()



    hour = hour < 10 ? `0${hour}` : hour

    minute = minute < 10 ? `0${minute}` : minute

    seconds = seconds < 10 ? `0${seconds}` : seconds

    p.textContent = `${hour}:${minute}:${seconds}`

}


setInterval(func, 1000)