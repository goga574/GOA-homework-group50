# 1) თუ ასაკი არის 18 ის ზემოთ ან 50 წლის ქვემოთ  ან თუ  ასაკი  ნაკლებია 18 ზე და მეტია 50 ზე  გამოტანეთ ის უნდა იყოს ან მოხუცი ან ახალგაზრდა



age = input("enter your age: ")


if age < "18":
    print("adult")

elif age > "50":
    print("old")
    
elif age >= "18" or age <= "50":
    print("medium")

