// შექმენით ცვლადი word - გადაეცით თქვენთვის სასურველი სიტყვა, შემდეგ მომხმარებელს შემოატანინეთ სასუველი ენა(მაგ:ქართული,ინგლისური,ფრანგული) და switch-კონსტრუქტორის გამოყენებით გააკეთეთ მარტივი translate როდესაც მომხმარებელი შემოიყვანს მაგალითად "ფრანგულს" თქვენი სიტყვა კონსოლში გადაითარგმნოს "ფრანგულად", ხოლო თუ მომხმარებელი შემოიტანს სხვა სიტყვას მაგ შემთხვევაში კონსოლში გამოიტანოს რომ ასეთი ენა არ არსებობს და ახლიდან სთხოვოს შეყვენა

let word = "გამარჯობა"
let language = prompt("enter language")


switch(language){
    case "french":
        console.log("bonjour")
        break
    case "georgia":
        console.log("გამარჯობა")
        break
    case "english":
        console.log("Hello")
        break
    default:
        console.log("this type of language does't exist")
}