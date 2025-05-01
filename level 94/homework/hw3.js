// 3)შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან



let res = []
let func = list1 =>{
    for(let i of list1){
        if(i.length>5){
            res.push((i))
        }
    }
    return res

}
console.log(func(["giorgi","ana","ia","irakli","gio","aleqsandre"]))