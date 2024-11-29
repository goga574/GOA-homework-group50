# შექმენით დიდი სია სადაც გექნებათ ბევრი ელემენტი და შემდეგ გამოიტანთ 5 ის ჯერად ინდექსებზე მდგომ ელემენტებს


list1 = ["goga", "giorgi","saba", "qetevani", 25 , 34.65, "beqa", 533, "goa",45.60 ,"gabrieli", 34 , 50,"manqana", " beqa",5]

for i in range(16):
    if i % 5==0:
        print(list1[i])