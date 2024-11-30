#მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითეტიკული

num = int(input("enter your number:"))

sum = 0

for i in range(1,num+1):
    sum += i
print(sum // num)

