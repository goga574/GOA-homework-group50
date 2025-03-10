// 1)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი

let carInfo = {
    model : "toyota",
    milage : 12000,
    year : 2020,
    condition : "prettyWell",
    carCondition(){
        return `car is in ${this.condition} condition`
    }
}

console.log(carInfo.carCondition())



// არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 
carInfo.color="black"
carInfo.price=15000
delete carInfo.milage
console.log(carInfo)