// შექმენით 3 პრომისი, პირველი პრომისი დაარეზოლვებს მომხმარებლის ინფორმაციას ობიექტის სახით, მეორე პრომისი დააბრუნებს მომხმარებლის პოსტებს( [ { postName, PostImage },  { postName, PostImage } ,  { postName, PostImage } ]), მესამე პრომისმა დაარეზოლვოს მომხმარებლის მეგობრები, ეგეც ლისტის სახით, თითოეული მეგობარი იქნება ობიექტი. თითოეულ პრომის ქონდეს შესრულების სხვადასხვა დრო. ეს სამივე პრომისი გაუშვით პარალელურად. საბოლოოდ გადაუარეთ დიდი პრომისის სიას და დაბეჭდეთ ეს ყველა ინფორმაცია

let promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{

        let userInfo = {
            name:"goga",
            age:20,
            adress:"gori"
        }
    
        resolve(userInfo)
    },1000)
})


let promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{

        let posts = [
            {
                postName:"mypost",
                postImage:"my.pnj"
            },
            {
                postName:"mypost2",
                postImage:"my.pnj2"
            }
        ]
    
        resolve(posts)
    },2000)
})



let promise3 = new Promise((resolve,reject) =>{

    setTimeout(()=>{

        let friends = [
            {
                friandName:"goga"
            },
            {
                friendName:"gela",
            }
        ]
    
        resolve(friends)
    },3000)
})


let allPromise = [promise1,promise2,promise3]

Promise.all(allPromise).then(data =>{
    for(let i of data){
        console.log(i)
    }
})