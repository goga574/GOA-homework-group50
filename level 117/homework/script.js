//  Level 117: 
//  შექმენით საიტი მანქანების შესახებ, დღეს ნასწავლი მასალის გამოყენებით: 
// --- ვიზუალური მხარე ---
// ◾ საიტის დიზანი: თქვენ როგორიც გაგიხარდებათ.
// ◾ ააგეთ სია(ul/ol), სადაც მოთავსებული იქნება სხვადასხვა ბრენდისა და მახასიათებლების მქონე მანქანები.
// ◾ თითოეულ მანქანის სახელზე დაჭერით უნდა გამოჩნდეს მანქანის სურათი და მახასიათებლები; გარდა ამისა getInfo და engineSound ღილაკები.
// --- ტექნიკური მხარე ---
// ◾ შექმენით მშობელი Car კლასი, ზოგადი თვისებებითა და getInfo მეთოდით.
// ◾ შექმენით შვილეული კლასები(მაგ. BMW, Mercedes, Audi და ა.შ), რომლებსაც დამატებით ექნებათ რამოდენიმე თვისება და მეთოდი.
// ◾ გამოიყენეთ დღეს ნასწავლი super keyword
// ◾ საიტზე getInfo და engineSound ღილაკებზე დაჭერით უნდა დაიკვრას შესაბამისი აუდიო ფაილები და საიტზე გამოჩნდეს კონკრეტული მანქანის სურათი და მახასიათებლები.
// ◾ საიტზე თითოეული მანქანის შესაბამისი მახასიათებლები Car კლასის შვილეული კლასების ობიექტების getInfo მეთოდის გამოყენებით უნდა გამოსახოთ.

let carSoundButton = document.querySelectorAll(".Car-Sound")

let carInfoButton = document.querySelectorAll(".Car-Info")

let fullInfo = document.querySelectorAll(".fullInfo")

let blur = document.querySelector(".blur")

let infoDiv = document.querySelector(".info1")

let x = document.querySelector(".x")
console.log(carSoundButton)
class Car {
    constructor(name, model, year, color) {
        this.name = name
        this.model = model
        this.year = year
        this.color = color
    }
}

class Mercedes extends Car {
    constructor(name, model, year, color, engineSound) {
        super(name, model, year, color)
        this.engineSound = engineSound
    }

    mercedesEngineSound() {
        let mercAudio = new Audio(this.engineSound)
        mercAudio.play()
    }

    mercedesFullInfo() {
        blur.style.display = "flex"
        infoDiv.style.display = "flex"
        fullInfo[0].textContent = `Car Name:${this.name}`
        fullInfo[1].textContent = `Car Model:${this.model}`
        fullInfo[2].textContent = `Car Year:${this.year}`
        fullInfo[3].textContent = `Car Color:${this.color}`
    }
}

let mercedes = new Mercedes("Mercedes", "Cls63", 2018, "black", "./audio/s63-amg-v8-engine-revs-41131.mp3")

class Bmw extends Car {
    constructor(name, model, year, color, engineSound) {
        super(name, model, year, color)
        this.engineSound = engineSound

    }

    bmwEngineSound() {
        let bmwAudio = new Audio(this.engineSound)
        bmwAudio.play()
    }


    bmwFullInfo() {
        blur.style.display = "flex"
        infoDiv.style.display = "flex"
        fullInfo[0].textContent = `Car Name:${this.name}`
        fullInfo[1].textContent = `Car Model:${this.model}`
        fullInfo[2].textContent = `Car Year:${this.year}`
        fullInfo[3].textContent = `Car Color:${this.color}`
    }
}

let bmw = new Bmw("Bmw", "G30", 2022, "darkBlue", "./audio/bmw_x3m40i.mp3")



class Audi extends Car {
    constructor(name, model, year, color, engineSound) {
        super(name, model, year, color)
        this.engineSound = engineSound
    }

    audiEngineSound() {
        let audiAudio = new Audio(this.engineSound)
        audiAudio.play()
    }
    audiFullInfo() {
        blur.style.display = "flex"
        infoDiv.style.display = "flex"
        fullInfo[0].textContent = `Car Name:${this.name}`
        fullInfo[1].textContent = `Car Model:${this.model}`
        fullInfo[2].textContent = `Car Year:${this.year}`
        fullInfo[3].textContent = `Car Color:${this.color}`
    }
}

let audi = new Audi("Audi", "rs6", 2015, "white", "./audio/rs6.mp3")



carSoundButton[0].addEventListener("click", () => {
    mercedes.mercedesEngineSound()
})

carSoundButton[1].addEventListener("click", () => {
    bmw.bmwEngineSound()
})

carSoundButton[2].addEventListener("click", () => {
    audi.audiEngineSound()
})




// ========
carInfoButton[0].addEventListener("click", () => {
    mercedes.mercedesFullInfo()
})

carInfoButton[1].addEventListener("click", () => {
    bmw.bmwFullInfo()
})

carInfoButton[2].addEventListener("click", () => {
    audi.audiFullInfo()
})





// =========
x.addEventListener("click", () => {
    blur.style.display = "none"
})