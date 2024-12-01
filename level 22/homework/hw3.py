# ააკეთეთ სია სადაც იქნება 10 ინტეჯერი , ინტეჯერები რომელიბ იქნება 10 ზე ნაკლები append ის დახმარებით შეიყვანეთ ახალ ცხრილში

numbers = [ 2,4,11,5,20,4,50,7]
empty = []

for element in numbers:
    if element < 10:
        empty.append(element)
print(empty)