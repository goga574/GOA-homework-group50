// 1) შექმენით Shape მშობელი კლასი, რომელსაც ექნება: 
// --- თვისებები --- 
// სოგრძე: Number, 
// სიგანე: Number, 
// ფერი: String 
// და კოორდინატები(სიის/მასივის სახით[x;y]): Array
// --- მეთოდები --- 
// სიგრძის შეცვლა(გაზრდა/შემცირება), 
// სიგანის შეცვლა(გაზრდა/შემცირება), 
// ფერის შეცვლა,
// კოორდინატების შევლა,
// ფიგურის დახატვა - მეთოდი, რომელიც კონსოლზე დაბეჭდავს: 
// 'კოორდინატებზე - ${კოორდინატები} იხატება ფიგურა, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.
// --- --- --- --- --- ---
// შექმნეთი შვილეული კლასები - მაგ(Cirle, Rectangle, Triangle და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Shape კლასის თვისებებსა და მეთოდებს.
// --- --- --- --- --- ---
// შეუცვალეთ თითოეულ შვილეულ კლასს ფიგურის დახატვის მეთოდი, მაგ. Triangle კლასის შემთქვევაში, ფიგურის დახატვის მეთოდი კონსოლზე დაბეჭდავს:
// 'კოორდინატებზე - ${კოორდინატები} იხატება სამკუთხედი, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.



class Shape{
    constructor(lenght , width , color , coordinates){
        this.lenght = lenght
        this.width = width
        this.color = color
        this.coordinates = coordinates
    }

    changeLenght(amount){
        this.lenght += amount
    }

    changeWidth(amount){
        this.width+=amount
    }

    changeColor(change){
        this.color = change
    }

    draw(){
        console.log(`იხატება ფიგურა ზომებით: სიგრძე არის ${this.lenght} , სიგანე არის ${this.width} , კოორდინატებით : ${this.coordinates} , და მისი ფერი არის ${this.color}`)
    }

}

let object = new Shape(10 ,15 , "წითელი" , [10 , 20])
object.changeLenght(20)
object.changeWidth(30)
object.changeColor("red")
object.draw()



class triangle extends Shape{
    drawTriangle(){
        console.log(`იხატება სამკუთხედი ზომებით: სიგრძე არის ${this.lenght} , სიგანე არის ${this.width} , კოორდინატებით : ${this.coordinates} , და მისი ფერი არის ${this.color}`)
    }
}

let Triangle = new triangle(50,50,"yellow" , [10,20])
Triangle.changeColor("blue")
Triangle.drawTriangle()