//    1) შექმენით კლასი პერსუსულ ზღვის გოჭზე და დაამატეთ მისი ფერის ზომის და წლოვანების(რომელ წელსაა დაბადებული, რომელ თვეში და რომელ რიცხვში) ამსახველი მნიშვნელობები, შემდეგ შექმენით მეთოდი რომელიც გამოითვლის ამ პერსუსული ზღვისგოჭის წლოვანებას და დააბრუნებს შედეგს თუ რამდენი წლისაა რამდენი თვისაა და რამდენი დღისაა


class Pig {
    constructor(color,size ,year , month , days){
        this.color = color
        this.size = size
        this.year = year
        this.month = month
        this.days = days
        
    }

    calculate(){
        let currentYear = new Date()
        let years = currentYear.getFullYear() - this.year
        let months = (currentYear.getMonth() + 1) - this.month
        let days = currentYear.getDay() - this.days
        console.log( years ,months ,days)

    }
}


let pig1 = new Pig("white" , "big" , 2010 , 6 , 28 )

pig1.calculate()
