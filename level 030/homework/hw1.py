# მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

number1 = int(input("enter first number:"))

number2 = int(input("enter second number:"))


def minus(num1, num2):

    return num1 - num2

print(minus(number1, number2))

# #---------------------------------------------

def plus(num1, num2):

    return num1 + num2
print(plus(number1, number2))

#----------------------------------------------

def multiply(num1 , num2):
    
    return num1 * num2

print(multiply(number1, number2))

#-----------------------------------------------

def divide(num1, num2):

    return num1/num2
print(divide(number1,number2))