# 2) გამოიყენეთ or ოპერატორი, რათა შეამოწმოთ, თუ მოცემული ციფრები არიან 10-ზე მეტი ან 50-ზე ნაკლები.



num = int(input("enter number: "))


if num >= 10 or num <= 50:
    print("10 ზე მეტი და 50 ზე ნაკლები")

elif num < 10:
    print("ათზე ნაკლები")

elif num > 50:
    print("50 ზე მეტი")