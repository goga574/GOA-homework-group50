// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)


let names = ["giorgi chalauri","giorgi bibilashivli","gela alaxverdovi"]

let name1 = element =>{
    let initial = element.split(" ")
    return `${initial[0][0].toUpperCase()}.${initial[1][0].toUpperCase()}`
}
let list = names.map(name1)
console.log(list)