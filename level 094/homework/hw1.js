// 1) შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის

let resList = [1,2,3,4,5,6,7,8]
let func = element => {
    if(element%2===0){
        return element
    }
}
newArr = resList.map(func)
        
console.log(newArr)



// let result = []

// let func2 = list2 =>{
//     for(let i of list2){
//         if(i%2!=0){
//             result.push(i)
//         }
//     }
//     return result
// }
// console.log("Odd Numbers: " + func2([1,2,3,4,5,6,7,8,9,10]))










