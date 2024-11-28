# შექმენით დიდი სია სადაც გექნებათ ბევრი ელემენტი და შემდეგ გამოიტანთ 5 ის ჯერად ინდექსებზე მდგომ ელემენტებს

list1 = ["giorgi",True, "qetevani", 25 , 34.65, "beqa", 533, "goa" ,"gabrieli", 34.50, 98, "mariami", "irakli"]

for i in range(15):
    if i % 5==0:
        print(list1[i])