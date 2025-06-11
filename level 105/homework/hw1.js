// const colors = ["red", "green", "blue"];

// გამოიყენე დესტრუქცია ისე, რომ მიიღო პირველი ორი ფერი ცვლადებში firstColor და secondColor

// let colors = ["red", "green", "blue"];

// [firstColor,secondColor] = colors

// console.log(firstColor , secondColor)





// გამოიყენე დესტრუქცია name და country-ს გამოსატანად ცვლადებში

// const user = {
//     name: "Giorgi",
//     age: 25,
//     country: "Georgia"
// };

// let {a ,b} = user;

// console.log(a,b)










// გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს

// const person = {
//   name: "Nino",
//   age: 28
// }

// let {name , age , country  =  "unknown"} = person

// console.log(country)





// გამოიძახე ეს ფუნქცია ობიექტით და გამოიყენე დესტრუქცია პარამეტრებში

// const printUser = ({ name, age }) => {
//   console.log(`${name} is ${age} years old`);
// };

// let obj = {
//     name : "goga",
//     age : 20
// }




// გამოიყენე დესტრუქცია ისე, რომ პირველი ელემენტი ცალკე მიიღო, ხოლო დანარჩენი rest მასივში

// let numbers = [10, 20, 30, 40, 50];
// let [a , ...rest] = numbers

// console.log(a,rest)




// let student = {
//   name: "Luka",
//   marks: {
//     math: 90,
//     physics: 85
//   }
// };

// let {name,marks} = student

// let {math,physics} = marks

// console.log(math,physics)