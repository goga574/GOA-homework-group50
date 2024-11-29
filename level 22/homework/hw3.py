# ააკეთეთ სია სადაც იქნება 10 ინტეჯერი , ინტეჯერები რომელიბ იქნება 10 ზე ნაკლები append ის დახმარებით შეიყვანეთ ახალ ცხრილში


numbers = [3, 5, 12 ,34 ,8 ,40 ,57 ,2 ,7 ,36]

empty=[]

for element in numbers:
    if element < 10:
       empty.append(element)
print(empty)
