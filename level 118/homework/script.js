//  Level 118: 
//  შექმენით Employee მშობელი კლასი, რომელსაც ექნება: 
//  --- თვისებები --- 
// ◽ id: Number პრივატული თვისება
// ◽  firstName: String
// ◽  lastName: String
// ◽  monthSalary: Number პრივატული თვისება
//  --- მეთოდები --- 
// ◽ fullName - გეტერი აბრუნებს '${firstName} ${lastName}', ხოლო სეტერი '${firstName}  ${lastName}' <- ასეთი ფორმატის string_ს ხლეჩს და ინახავს შესაბამის ატრიბუტებში 
// ◽ yearSalary - გეტერი აბრუნებს 1 წლის ხელფასს. სეტერი არ აქვს
// ◽ monthSalary - სეტერში გააკონტროლეთ, რომ ახალი ხელფასის ოდენობა იყოს ნულზე მეტი. გეტერით დააბრუნეთ ხელფასი.
// ◽ id - გეტერი დააბრუნებს აიდის. სეტერი არ ექნება
//  შექმენით შვილეული კლასები (მაგ. Manager, Boss და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Employee კლასის თვისებებსა და მეთოდებს. 
//  --- შვილეულ კლასს უნდა ჰქონდეს --- 
// ◽  department:  String თვისება(გამოიყენეთ super)
// ◽  changeDepartment - სეტერი, რომელიც მიიღებს შემდეგ სიას[newDepartament, newSalary], მოახდენს მონაცემთა ვალიდაციას და თუ ახალი ხელფასი უფრო მომგებიანია, შეცვლის ობიექტის monthSalary და departament თვისებებს. 
// ◽  მეთოდი info - დააბრუნებს ინფორმაციას ობიექტის შესაახებ
// ◽  გადაწერეთ/შეცვალეთ მშობელი კლასის yearSalary გეტერი(ვთქვათ მენეჯერს აქვს პრემიები😏) 

class Employee{
    #id
    #monthSalary
    constructor(id , firstName , lastName , monthSalary){
        this.#id = id
        this.firstName = firstName
        this.lastName = lastName
        this.#monthSalary = monthSalary
    }
    // მივიღეთ fullname
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }


    // მივიღეთ თვიური ხელფასი (private)
    get salary(){
        return this.#monthSalary
    }

    // მივიღეთ წლიური ხელფასი
    get yearSalary(){
        return this.salary * 12
    }



    // მივიღეთ id (private)
    get getId(){
        return this.#id
    }
   
    
    set monthxelfasi(newSalary){
        if(newSalary < 0){
            console.log("unda iyos 0 ze meti") 
        }else{
            this.#monthSalary = newSalary
            console.log(this.salary)
        }
    }


}

let employeObj = new Employee(123, "giorgi" , "kitrikoza", 1200 )

console.log(employeObj.fullName)

console.log(employeObj.salary)

console.log(employeObj.yearSalary)

console.log(employeObj.getId)

employeObj.monthxelfasi = 1500


class Boss extends Employee{
    constructor(id , firstName , lastName , monthSalary , departament){
        super(id , firstName , lastName , monthSalary )
        this.departament = departament
    }

    

    set changeDepartment(bossDegSal){
        if(bossDegSal[1] > this.salary){
            this.monthxelfasi = bossDegSal[1]
            console.log(this.salary)
            
            this.departament = bossDegSal[0]
            console.log(this.departament)
        }else{
            console.log("tooo loww")
        }
    }

    get getInfo(){
        console.log(`
                obj info
            id: ${this.getId} 
            firstname:${this.firstName}  
            lastname:${this.lastName}
            monthsalary:${this.salary}
            departament:${this.departament}
            yearSalary:${this.yearSalary}`)
    }
}







let bossObj = new Boss(1234, "bossi" , "kalatoza" , 2000, "first")

bossObj.changeDepartment = ["second" , 11100]

bossObj.getInfo