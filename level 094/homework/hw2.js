// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)


let names = ["giorgi chalauri","giorgi bibilashivli","gela alaxverdovi"]

let func = element =>{
    let splited = element.split(" ")
    return `${splited[0][0].toUpperCase()}.${splited[1][0].toUpperCase()}`
}

newArr = names.map(func)
console.log(newArr)













































