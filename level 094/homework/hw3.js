// 3)შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან


let names = ["giorgi","ana","irakli"]
let func = element =>{
    if(element.length > 5){
        return element
    }
}

let idk = names.map(func)
console.log(idk)

































