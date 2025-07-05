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


class Car {
    constructor(name , model , year , color){
        this.name = name
        this.model = model
        this.year = year
        this.color = color
    }
}

class Mercedes extends Car{
    constructor(name , model , year , color , engineSound){
        super(name , model , year , color)
        this.engineSound = engineSound
    }
}

let mercedes = new Mercedes("Mercedes" , "Cls63" , 2018 , "black" , "url...")

class Bmw extends Car{
    constructor(name , model , year , color , engineSound){
        super(name , model , year , color)
        this.engineSound = engineSound

    }
}

let bmw = new Bmw("Bmw" , "G30" , 2022 , "darkBlue", "url...")



class Audi extends Car{
    constructor(name , model , year , color, engineSound){
        super(name , model , year , color)
    }
}

let audi = new Audi("Audi" , "rs6" , 2015 , "white" , "url...")