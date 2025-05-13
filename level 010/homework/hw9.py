#  1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12

num1 = int(input("enter number1:"))


num2 = int(input("enter number2:"))

question = input("which movement do you want on these numbers?:")


if question == "+":
    print(num1 + num2)

elif question == "-":
    print(num1 -  num2)

elif question == "*":
    print(num1 * num2)

elif question == "/":
    print(num1 / num2)

else:
    print("your inputs are incorrect")