// 1) შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის
let resList = []
let func = list1 =>{
    for(let i of list1){
        if(i%2==0){
            resList.push(i)
        }
    }
    return resList
}
console.log("Even Numbers: "+func([1,2,3,4,5,6,7,8,9,10]))



let result = []

let func2 = list2 =>{
    for(let i of list2){
        if(i%2!=0){
            result.push(i)
        }
    }
    return result
}
console.log("Odd Numbers: "+func2([1,2,3,4,5,6,7,8,9,10]))
