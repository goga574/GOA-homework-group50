class Clothes{
    constructor(brand , color){
        this.brand = brand
        this.color = color
    }
    changeColor(color){
        this.color = color
    }

    changeBrand(brand){
        this.brand = brand
    }
    getInfo(){
        console.log(`the brand of this clothe is ${this.brand} and the color of this clothe is ${this.color}`)
    }
}


let obj = new Clothes("balenciaga","red")

obj.getInfo()
obj.changeColor("blue")
obj.changeBrand("adidas")
obj.getInfo()


class Clothes2 extends Clothes {
    constructor(brand,color,size){
        super(color,brand)
        this.size = size
    }

    getFullInfo(){
        console.log(`the brand of this clothe is ${this.brand} and the color of this clothe is ${this.color} and the size of this clothe is ${this.size}`)
    }

}


let obj2 = new Clothes2("nike" , "yellow" , 30)

obj2.getFullInfo()