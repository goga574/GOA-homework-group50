# შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი

number = int(input("enter num"))

def davaleba(num1):
    if num1 %2 == 0:
        return "even"
    else:
        return "odd"

print(davaleba(number))