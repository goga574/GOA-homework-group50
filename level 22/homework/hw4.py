# 4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი

integer = [12 , 3, 54 ,7 ,11]

flout = [12.5 ,23.45, 15.60 , 50.75, ]

st = ["giorgi","lasha" ,"manqana", "goa"]

empty = []

for element in integer:
    if type(element) == int:
        empty.append(element)
print(empty)

for element in flout:
    if type(element) == float:
        empty.append(element)
print(empty)

for element in st:
    if type(element) == str:
        empty.append(element)
print(empty) 