// 1)შექმენით ფუნქცია რომელსაც გადაეცემა ორი არგუმენტი , x და y რიცხვები და ფუნქციაში დააბრუნეთ x-ი ხარისხად y , აუცილებლად გამოიყენეთ arrow function-ები


// // first way
// let something = (x,y) => x**y 

// console.log(something(5,2))

// // second way
// let something1 = (first,second) =>{
//     return first**second
// }

// console.log(something1(3,5))



// // 2)შექმენით ფუნქცია arrow function ების დახმარებით რომელსაც გადაეცემა 1 პარამეტრი დაწერეთ ისე როგორც არის best practice

// let best = surname => surname

// console.log(best("chalauri"))


// // 3)შექმენით ფუნქცია რომელიც ჩაამატებს ახალ სიაში ლუწ რიცხვებს და შემდეგ გაიგებთ ამ ახალი სიიდან ამ რიცხვებისჯამს ,გამოიყენეთ arrow functions

// let sum = 0
// let sum1 = []

// let listi = nums =>{
//     for(let i of nums){
//         if(i%2==0){
//             sum1.push(i)
//         }
//     }
//     for(let i of sum1){
//         sum+=i
//     }
//     return sum
// }

// console.log(listi([4,5,6,7,8]))



// 3) შექმენით სია სადაც შეინახავთ რანდომ სახელებეს, map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი

const first = ["goga", "lasha", "irakli"]


const upper1 = element => element.toUpperCase()

const new_list = first.map(upper1)

console.log(new_list)