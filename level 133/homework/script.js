// შექმენით პირველი პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 15–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/users/${num}

//  ▪თუ ასეთი მომხმარებელი მოიძებნა (response.ok == true) → resolve მომხმარებლის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// შექმენით მეორე პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 150–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/posts/${num}

//  ▪თუ ასეთი პოსტი მოიძებნა (response.ok == true) → resolve პოსტის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// გამოიყენეთ Promise.all, რომ ორივე პრომისი პარალელურად გაეშვას.
// Promise.all მეთოდზე  გამოიყენეთ then და catch მეთოდები, 
// then დაბეჭდავს ორივე მიღებულ ინფოს (მომხმარებელი და პოსტი).
// catch reject ის შემთხვევაში დააკონსოლოგებს, რომ მონაცემები ვერ მოიძებნა 

let promise1 = new Promise(async (resolve, reject) => {
    let randomNum = Math.floor(Math.random() * 15) + 1
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${randomNum}`)
    
    let response = await data.json()

    if(data.ok){
        resolve(
            {
                userName:response.name,
                UserSurname:response.username
            }
        )
    }else{
        reject("user not found")
    }
})



let promise2 = new Promise(async (resolve, reject) => {
    let randomNum1 = Math.floor(Math.random() * 150) + 1
    let data1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNum1}`)
    
    let response1 = await data1.json()

    if(data1.ok){
        resolve(
            {
                userId:response1.userId,
                title:response1.title
            }
        )
    }else{
        reject("user not found1")
    }
})


let AllPromise = [promise1,promise2]

Promise.all(AllPromise).then(data =>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})