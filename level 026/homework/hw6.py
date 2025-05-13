# შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში

names = ["tiko" , "giorgi", "tinatini" , "tako" , "lasha", "toko", "beqa"]

empty =[]
 

for element in names:
    if element[0] == "t":
        empty.append(element)
print(empty)


