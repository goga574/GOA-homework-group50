# ) შექმენით სია რომელშიც გექნებათ ათიცალი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ ამ სიიდან მხოლოდ 10ზე დაბალი რიცხვები გამოიყენეთ for loop

numbers = [ 12 , 3 , 6 , 76 , 5 , 98, 9 ,12, 4 ,67]

for element in numbers:
    if element < 10:
        print(element)