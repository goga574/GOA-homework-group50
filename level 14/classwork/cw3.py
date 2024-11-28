#მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითეტიკული

num = int(input("enter your number:"))

average = 0

for i in range(1, num+1):
    
    average = average + i

print(average // num)