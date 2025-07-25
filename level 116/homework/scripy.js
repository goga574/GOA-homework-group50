// 1) შექმენით Transport მშობელი კლასი, რომელსაც ექნება: 
// --- თვისებები --- 
// მაქსიმალური სიჩქარე(maxSpeed): Number
// ფერი (color): String
// საწვავის რაოდენობა(ლიტრებში) (fuel): Number 
// განვლილი მანძილი (distanceTraveled): Number = 0 (ობიექტის შექმნის დროს არის 0)
//  --- მეთოდები --- 
// საწვავის შევსება refuel(liter) 
// ◼ მეთოდი უნდა ავსებდეს(უმატებდეს) ტრანსპორტის საწვავის რაოდენობას.
// ◼ მოახდინეთ liter არგუმენტის ვალიდაცია(უნდა იყოს Number ტიპის, არაუარყოფითი რიცხვი)
// ფერის შეცვლა changeColor(color)
// ◼ მეთოდი უნდა ცვლიდეს ტრანსპორტის ფერს.
// ◼ მოახდინეთ color არგუმენტის ვალიდაცია(უნდა იყოს String ტიპის)
// ინფორმაცია ტრანსპორტზე getInfo()
// ◼ მეთოდი უნდა აბრუნებდეს ტრანსპორტის შესახებ ინფორმაციას: 
//     'ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${maxSpeed}; ფერი - ${color}; საწვავის რაოდენობა - ${fuel}; განვლილი მანძილი - ${distanceTraveled}'
// გადაადგილება move(distance, fuelNeeded)

// ◼ ეს მეთოდი გადაადგილებს ტრანსპორტს გარკვეული მანძილით(distance) და ამისთვის ხარჯავს გარკვეული რაოდენობის საწვავს(fuelNeeded).
// ◼ მოახდინეთ არგუმენტების ვალიდაცია(ორივე უნდა იყოს Number ტიპის).
// ◼ შეამოწმეთ აქვს თუ არა ტრანსპორტს საკმარისი საწვავი მითითებული მანძილის სრულად დასაფარად.
// ◼ თუ ტრანსპორტს აღმოაჩნდა საკმარისი საწვავი - განახორციელეთ გადაადგილება(შეცვალეთ ობიექტის distanceTraveled თვისება)
// ◼ თუ საკმარისი საწვავი არ არის მეთოდმა დააბრუნოს ერორი(განახორციელეთ თქვენ როგორც გინდათ)
// --- --- --- --- ---
//  ამის შემდეგ შექმენით შვილეული კლასები - მაგ. (Car, Plane, Boat და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Transport კლასის თვისებებსა და მეთოდებს.
// ◼ შვილეულ კლასებს შეუცვალეთ getInfo მეთოდი.
// ◼ Car კლასის შემთხვევაში getInfo მეთოდმა უნდა დააბრუნოს:
//     'ეს არის რაღაც მანქანა, რომლის მაქს. სიჩქარეა - ${maxSpeed}; ფერი - ${color}; საწვავის რაოდენობა - ${fuel}; განვლილი მანძილი - ${distanceTraveled}'
//  2) ხვალისთვის დაასრულეთ ToDo აპლიკაცია 


class Transport {
    constructor(maxSpeed, color, fuel, distanceTraveled) {
        this.maxSpeed = maxSpeed
        this.color = color
        this.fuel = fuel       
        this.distanceTraveled = 0
    }

    refuel(liter) {
        if (typeof liter !== "number" || liter<0) {
            console.log("შემოიყვანე ინტეჯერი და დადებითი რიცხვი")
        }else{  
            this.fuel+=liter
        }
    }


    changecolor(color){
        if(typeof color !== "string"){
            console.log("შემოიყვანე ფერი რომელიც იქნება სტრინგის ტიპის")
        }else{
            this.color = color
        }
        
    }

    getInfo(){
        console.log(`ეს არის ტრანსპორტი,რომლის მაქსიმალური სიჩქარეა ${this.maxSpeed}; ფერი- ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`)
    }

    move(distance, fuelNeeded){
        if(typeof distance !== "number" || typeof fuelNeeded !== "number"){
            console.log("enter only integers")
        }else{
            if(this.fuel > distance){
                this.distanceTraveled += distance
            }else{
                console.log("not enought fuel")
            }
        }
    }
}

class Car extends Transport{
    getInfo2(){
        console.log(`ეს არის მანქანა merso,რომლის სიჩქარეა ${this.maxSpeed} , ფერი არის ${this.color} , საწვავის რაოდენობა არის ${this.fuel} , და გავლილი მანძილი არის ${this.distanceTraveled}`)
    }
}

let obj = new Transport(230,"red" , 10 , 100)

obj.getInfo()
obj.refuel(5)
obj.getInfo()
obj.changecolor("yellow")
obj.getInfo()
obj.move(10,20)

let obj2 = new Car(100,"yellow" , 50 , 200)

obj2.changecolor("blue")
obj2.move(30,40)
obj2.getInfo2()




