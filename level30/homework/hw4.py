#  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი

number =int(input("enter number:"))

def gela(num1):
    if num1 < 0:
        return "negative"
    else:
        return "positive"


print(gela(number))