# 7) დაბეჭდეთ 100 დან 200 მდე ყველა რიცხვი გვერძე კი მიუწერეთ ლუწია თუ კენტი გამოიყენეთ while loop და if else

i = 100

while i < 200:
    if i % 2==1:
        print(str(i)+ "odd")
    else:
        print(str(i) + "even")
    
    i = i + 1