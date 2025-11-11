#  განუწყვეტლივ სთხოვეთ მომხმარებელს მისი სახელი, სანამ არ შეიყვანს "quit"-ს.

name  = input("enter name:")


while True:
    if name == "quit":
        
        break
    else:
        name = input("enter your name:")
    