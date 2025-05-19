// 5) შექმენით სარეგისტრაციო ფორმა. რეგისტრაციის შემდეგ მომხმარებლის მონაცემი უნდა შეინახოთ სიაში ობიექტის სახით. თითოეულ მომხმარებელს უნდა ჰქონდეს თავისი ობიექტი. ამ ობიექტებს კარგი იქნება თუ შექმნით ობიექტის კონსტრუქტორი ფუნქციის მეშვეობით. გააკეთეთ შემოწმება, რომ მომხმარებელი უკვე დაკავებული ემაილით ვერ დარეგისტრირდეს. 

let form = document.querySelectorAll(".form1")

function register(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

let acc = []
form[0].addEventListener("submit", (e) => {
    e.preventDefault()

    let newObj = new register(e.target.username.value, e.target.email.value, e.target.password.value)
    acc.push(newObj.email)

    
    
})
