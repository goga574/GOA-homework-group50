# 4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი

intg = [2, 40, 50 ,3 , 55]

flt = [1.5, 5.50 , 60.40 , 5.5 , 6.9]

strng = ["giorgi", "lasha", "beqa" ,"giorgi", "irakli"]

empty = []

for element in intg:
    if type(element) == int:
        empty.append(element)
    
for element in strng:
    if type(element) == str:
        empty.append(element)
    
for element in flt:
    if type(element) == float :
        empty.append(element)
print(empty)