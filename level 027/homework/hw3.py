# მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.

num1 = int(input("enter number:"))

num2 = int(input("enter second number:"))

sum1 = 0

multiply = 1

for i in range(num1,num2):
    sum1 += i
    multiply *= i

print(sum1)
print(multiply)