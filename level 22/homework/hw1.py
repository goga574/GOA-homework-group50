# ექმინთ 2 სია  , პირველი სია ინქება ცარიელი  ხოლო მეროე სია ინქება სახელებით სავსე მინიმუმ 5 , თქვენი დავალებაა ამ სიიდან  ჩაამოტომ მეორე სიაში სახელელბი რომელიც  4 სიმბოლოზე ნაკლებია

list1 = ["ana","giorgi", "ia","beqa","ani"] 

empty=[]

for element in list1:
    if len(element) < 4:
        empty.append(element)
print(empty)
