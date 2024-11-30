#  მომხმარებელს შეაყვანინეთ რიცხვი და განაგრძეთ კითხვა მანამ, სანამ არ შეიტანს დადებით რიცხვს.


num = int(input("enter number"))

while True:

    if num < 0:
        num = int(input("enter number"))
    else:
        print("correct")
        break
       