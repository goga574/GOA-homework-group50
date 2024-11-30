# შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია 

names = ["giorgi","goga" , "irakli" , "goga", "ana", "salome", "goga", "nona"]

num = 0

for element in names:
    if element == "goga":
       num +=1
print(num)
