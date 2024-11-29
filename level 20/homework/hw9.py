# შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 

numbers = [2,5,6,7,11,20]

odd = 0
even = 0

for i in numbers:
    if i % 2 == 0:
        even += i
    else:
        odd += i
        
print(odd)
print(even)