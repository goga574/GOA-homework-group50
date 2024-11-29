#დაითვალეთ დადებითი დამ უარყოფითი რიცხვების ჯამი სიიდან

number = [-10,20,-3,30,-40,35]

positive = 0 
negative = 0

for i in number:
    if i < 0:
        negative += i
    else:
        positive += i
print(negative)
print(positive)