#შექმენით სია რომლიდანაც დაამატებთ მხოლოდ კენტ რიცხვებს ახალ სიაში/// .append

num = [1,2,3,4,5,6,7,8,9,10]

empty = []

for i in num:
    if i % 2 ==1:
        empty.append(i)
print(empty)