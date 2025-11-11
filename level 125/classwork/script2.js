// შექმენი ფუნქცია, რომელიც ტექსტს დაბეჭდავს და შემდეგ callback გამოიძახე, რომ სხვა ტექსტიც გამოჩნდეს.



// function order(callback) {
//     console.log("order pica")
//     callback("gela1")
// }

// function callGela(name) {
//     console.log(`ravaxar ${name}`)
// }

// order(callGela)


// ========================
// დაწერე ფუნქცია, რომელიც ორი რიცხვის ჯამს გამოითვლის და შედეგს callback–ს გადასცემს.

// function sum (callback,x,y){
//     callback(x+y)
// }

// function some(res){
//     console.log(res)
// }

// sum(some,10,20)


// ========================
// გააკეთე ფუნქცია, რომელიც setTimeout–ით 2 წამს დაელოდება და მერე callback–ში რაიმე ტექსტს დაბეჭდავს.

// function pizza(callback){
//     console.log("mzaddeba")
//     callback("goga")
// }

// function something(name){
//     setTimeout(()=>{
//         console.log("ready " + name)
//     },2000)
// }

// pizza(something)


// =========================
// დაწერე ფუნქცია, რომელიც მასივის თითოეულ ელემენტს გადააწვდის callback–ს.



// function yvela(arr, callback) {
//     for (let i of arr) {
//         callback(i)
//     }

// }

// function gadavla(item) {
//     console.log(item)
// }

// yvela(["goga", "saaba", "irakli"], gadavla)

// =========================


// შექმენი ფუნქცია, რომელიც იღებს რიცხვს და callback–ში გადასცემს რიცხვის გაორმაგებულ მნიშვნელობას.

// Callback ფუნქციაში დაბეჭდე შედეგი.


// function double(num,callback){
//     callback(num*2)
// }

// function something(math){
//     console.log(math)
// }

// double(5,something)

// ================

// ტექსტის გარდაქმნა

// ფუნქცია იღებს ტექსტს, callback გადაცემს ტექსტს დიდი ასოებით (toUpperCase).

// Callback–ში დაბეჭდე გარდაქმნილი ტექსტი.
// function text(word,callback){
//     callback(word.toUpperCase())
// }

// function dabechdva(data){
//     console.log(data)
// }

// text("gela",dabechdva)

// ====================


// 3) მასივის ელემენტების ჯამი

// ფუნქცია იღებს მასივს, გამოითვლის ელემენტების ჯამს და callback–ში გადასცემს შედეგს.

// Callback–ში დაბეჭდე ჯამი.


// function sumNum(arr,callback){
//     let sum = 0
//     for(let i of arr){
//         sum+=i
//     }
//     callback(sum)
// }

// function dajameba(data){
//     console.log(data)
// }

// sumNum([1,2,3],dajameba)



// 4) ვადაგადაცილებული ოპერაცია

// ფუნქცია იღებს სახელს და პერიოდს (მილიწამებში), callback–ში 2 წამში დაბეჭდოს "Hello, <name>!".



// function displayName(name, time, callback) {
//     setTimeout(() => {
//         callback(`Hello ${name}`)
//     }, time)
// }

// function dayovneba(thing) {
//     console.log(thing)
// }

// displayName("giorgi", 2000, dayovneba)



// 1) რიცხვების გამოკლება

// შექმენი ფუნქცია, რომელიც იღებს ორი რიცხვს და callback–ში გადასცემს მათი სხვაობის შედეგს.


// function gamokleba(x,y,callback){
//     callback(x-y)
// }

// function shemcir(all){
//     console.log(all)
// }

// gamokleba(10,5,shemcir)

// 2) მასივიდან მხოლოდ ციფრების შერჩევა

// ფუნქცია იღებს მასივს, callback–ში გადასცემს მხოლოდ რიცხვებს.

// Callback ბეჭდავს ახალ მასივს.


// function list(arr,callback){
//     let newArr = []
//     for(let i of arr){
//         if(typeof i === "number"){
//             newArr.push(i)
//         }
//     }

//     callback(newArr)
// }


// function bechdva(all){
//     console.log(all)
// }

// list([1,"goga",2,"ilia",3],bechdva)

// ============




// 3) ტექსტის სიგრძის შემოწმება

// ფუნქცია იღებს ტექსტს, callback–ში გადასცემს true თუ ტექსტი >5 სიმბოლო, წინააღმდეგ შემთხვევაში false.

// Callback ბეჭდავს შედეგს.


// function check(word, callback) {
//     result = word.length > 5
//     callback(result)

// }

// function word(sityva) {
//     console.log(sityva)

// }

// check("giorgi", word)

// ======================

// 4) ელემენტების გაორმაგება მასივში

// ფუნქცია იღებს მასივს, callback–ში გადასცემს ახალ მასივს, სადაც ყველა ელემენტი გაორმაგებულია.

// Callback ბეჭდავს ახალ მასივს.

// function double(arr,callback){
//     let newArr = []
//     for(let i of arr){
//         newArr.push(i*2)
//     }
//     callback(newArr)
// }

// function number(item){
//     console.log(item)
// }

// double([1,2,3,4],number)


// =========================
// 1) რიცხვების ფილტრი

// ფუნქცია იღებს მასივს და callback–ში გადასცემს მხოლოდ კენტ რიცხვებს.
// Callback ბეჭდავს ახალ მასივს.

// function odd(arr,callback){
//     let newArr = []
//     for(let i of arr){
//         if(i%2===1){
//             newArr.push(i)
//         }
//     }
//     callback(newArr)
// }


// function odd1(item){
//     console.log(item)
// }


// odd([1,2,3,4,5,6],odd1)

// =========================


// 2) ტექსტების ფილტრი

// ფუნქცია იღებს მასივს სტრინგებით, callback–ში გადასცემს მხოლოდ სტრინგებს, რომლებიც იწყება დიდ ასოთი.

// Callback ბეჭდავს ახალ მასივს.

// function upper(arr,callback){
//     let newarr = []
//     for(let i of arr){
//         if(i[0] === i[0].toUpperCase()){
//             newarr.push(i)
//         }
//     }
//     callback(newarr)
// }

// function oe(item){
//     console.log(item)
// }

// upper(["Goga","irakli","Ioane","salome","Giorga"],oe)





// ?===================
// 3) დაყოვნება და ტექსტის დაბეჭდვა

// ფუნქცია იღებს ტექსტს და დროის პარამეტრს.
// 3 წამში callback–ში ბეჭდავს ტექსტს "Delayed: <text>".

// function text(word,time,callback){
//     setTimeout(()=>{
//         callback(`Delayed: ${word}`)
//     },time)
// }

// function oe(item){
//     console.log(item)
// }

// text("goga1",3000,oe)







// 4) რიცხვების შეკრება მასივში

// ფუნქცია იღებს მასივს და callback–ში გადასცემს ელემენტების ჯამს, მხოლოდ ჯამი კენტი რიცხვების.

// function sum(arr,callback){
//     let sum = 0
//     for(let i of arr){
//         if(i % 2 === 1){
//             sum+=i
//         }
//     }

//     callback(sum)
// }


// function ao(item){
//     console.log(item)
// }

// sum([1,2,3,4,5],ao)


// Callback ბეჭდავს შედეგს.





// 5) მასივის ელემენტების გასადიდება

// ფუნქცია იღებს მასივს რიცხვებით და callback–ში გადასცემს ახალ მასივს, სადაც ყველა ელემენტი გაორმაგებულია მხოლოდ კენტ რიცხვებისთვის.

// Callback ბეჭდავს ახალ მასივს.

// function doubleOdd(arr,callback){
//     let newArr = []
//     for(let i of arr){
//         if(i % 2 ===1){
//             newArr.push(i*2)
//         }else{
//             newArr.push(i)
//         }
//     }
//     callback(newArr)
// }


// function ao(item){
//     console.log(item)
// }

// doubleOdd([1,2,3,4,5],ao)



// 6) მასივიდან სტრინგების სიგრძის გადამოწმება

// ფუნქცია იღებს მასივს სტრინგებით და callback–ში გადასცემს ახალ მასივს, სადაც მხოლოდ ის სტრინგებია, რომელთა სიგრძე >4.

// Callback ბეჭდავს ახალ მასივს.

function checkLen(arr,callback){
    let newArr = arr.filter(element => element.length>4)
    
    callback(newArr)

}


function ao(item){
    console.log(item)
}

checkLen(["gio", "giorgi","ana","iraklius"],ao)



// 7) რიცხვების სახეზე გამოტანა

// ფუნქცია იღებს მასივს რიცხვებით და callback–ში ბეჭდავს მხოლოდ დადებით რიცხვებს.

// 8) რიცხვების სახლის პარიტეტი

// ფუნქცია იღებს მასივს რიცხვებით და callback–ში გადასცემს მასივს "even" ან "odd" ნიშნებით თითოეული რიცხვისთვის.

// 9) მასივში სტრინგების გაერთიანება

// ფუნქცია იღებს მასივს სტრინგებით და callback–ში გადაცემს ყველა სტრინგის ერთიან ტექსტს, შუალედით , .

// Callback ბეჭდავს ახალ სტრინგს.

// 10) ნამდვილი “async simulation”

// ფუნქცია იღებს რიცხვს და callback–ში 1–დან რიცხვამდე გაშვებულ setTimeout–ებით თითო რიცხვს ბეჭდავს, როგორც პატარა “ანიმაცია”.