# ექმინთ 2 სია  , პირველი სია ინქება ცარიელი  ხოლო მეროე სია ინქება სახელებით სავსე მინიმუმ 5 , თქვენი დავალებაა ამ სიიდან  ჩაამოტომ მეორე სიაში სახელელბი რომელიც  4 სიმბოლოზე ნაკლებია

name = ["tea","giorgi","gia","lasha", "ia"]

empty = []


for i in name:
    if len(i) < 4:
        empty.append(i)
print(empty)
