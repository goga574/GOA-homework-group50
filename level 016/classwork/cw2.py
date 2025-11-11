#ერთიდან ასამდე დაატრიალეთ ციკლი და დაბეჭდეთ მხოლოდ ლუწი რიცხვები loop გამოყენებით,შეასრულეთ ორი გზით ერთი if-else ით ერთ მათ გარეშე


for i in range(0,100,2):
    print(i)

#or

for i in range(1,100):
    if i%2==0:
        print(i)

#or

i = 0 

while i <100:
    print(i)
    i +=2

#or

i = 0 

while i < 100:
    if i % 2==0:
        print(i)
    i+=1
