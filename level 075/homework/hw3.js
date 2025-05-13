// შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"
let student = {
    fullName : "goga chalauri",
    score : [3,7,5],
    averageScore(){
        let sum =  0
        let avg = sum/this.score.length
        for(let i of this.score){
            sum +=i
        }
        return avg
    },
    checkStudent(){
        let avg = this.averageScore()
        if(avg > 90){
            console.log("best student")
        }
        else if(avg >60 && avg <90){
            console.log("good student")
        }
        else if(avg < 60){
            console.log("normal student")
        }
    }
   
} 
student.averageScore()
student.checkStudent()
    