#შექმენით სია რომლიდანაც დაამატებთ მხოლოდ კენტ რიცხვებს ახალ სიაში/// .append

list=[9 ,12 ,45 ,7 ,6 ,37 ,48 ,97  ,43]

empty=[]
for i in list:
    if i %2==1:
        empty.append(i)
print(empty)
