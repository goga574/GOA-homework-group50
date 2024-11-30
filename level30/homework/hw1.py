# მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

number1 = int(input("enter first number:"))

number2 = int(input("enter second number:"))

def numbers(num1,num2):

    return num1 + num2

print(numbers(number1,number2))



#----------------------------------------------


number1 = int(input("enter first number:"))

number2 = int(input("enter second number:"))

def numbers(num1,num2):

    return num1 - num2

print(numbers(number1,number2))


#----------------------------------------------


number1 = int(input("enter first number:"))

number2 = int(input("enter second number:"))

def numbers(num1,num2):

    return num1 * num2

print(numbers(number1,number2))


#----------------------------------------------

number1 = int(input("enter first number:"))

number2 = int(input("enter second number:"))

def numbers(num1,num2):

    return num1 / num2

print(numbers(number1,number2))