// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)


let res =[]

let name1 = initials =>{
    for(let i of initials){
        let splited = i.split(" ")
        for(let j of splited){
            res.push(j[0])
        }   
        
    }
    console.log(res.join(".").toUpperCase())
    
}

console.log(name1(["goga chalauri"]))