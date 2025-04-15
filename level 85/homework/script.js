let audios = ["./audio/crash.mp3", "./audio/kick-bass.mp3", "./audio/snare.mp3", "./audio/tom-1.mp3", "./audio/tom-2.mp3", "./audio/tom-3.mp3", "./audio/tom-4.mp3"]

let sound = document.querySelectorAll(".img-container")


document.addEventListener("keyup", function (e) {
    if (e.key == "w") {
        sound[0].style.border = "8px solid #434e79"
    }
    else if (e.key == "a") {
        sound[1].style.border = "8px solid #434e79"
    }
    else if (e.key == "s") {
        sound[2].style.border = "8px solid #434e79"
    }
    else if (e.key == "d") {

        sound[3].style.border = "8px solid #434e79"
    }
    else if (e.key == "j") {

        sound[4].style.border = "8px solid #434e79"
    }
    else if (e.key == "k") {

        sound[5].style.border =  "8px solid #434e79"
    }
    else if (e.key == "l") {
        sound[6].style.border = "8px solid #434e79"
    }
})

document.addEventListener("keydown", function (e) {
    if (e.key == "w") {
        let idk = new Audio(audios[0])
        idk.play()
        sound[0].style.border = "8px solid rgb(42, 54, 104)"
    }
    else if (e.key == "a") {
        let idk = new Audio(audios[1])
        idk.play()
        sound[1].style.border = "8px solid rgb(42, 54, 104)"
    }
    else if (e.key == "s") {
        let idk = new Audio(audios[2])
        idk.play()
        sound[2].style.border = "8px solid rgb(42, 54, 104)"
    }
    else if (e.key == "d") {
        let idk = new Audio(audios[3])
        idk.play()
        sound[3].style.border = "8px solid rgb(42, 54, 104)"
    }
    else if (e.key == "j") {
        let idk = new Audio(audios[4])
        idk.play()
        sound[4].style.border = "8px solid rgb(42, 54, 104)"
    }
    else if (e.key == "k") {
        let idk = new Audio(audios[5])
        idk.play()
        sound[5].style.border = "8px solid rgb(42, 54, 104)"
    }
    else if (e.key == "l") {
        let idk = new Audio(audios[6])
        idk.play()
        sound[6].style.border = "8px solid rgb(42, 54, 104)"
    }
})

