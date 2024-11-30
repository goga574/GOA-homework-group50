# შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია ხოლო ფუნქცია დააბრუნებს ამ სიის ელემენტების ჯამს

def sum():

    numbers = [1, 2, 3, 4 ,5 ,6 ,7]
    
    jami = 0

    for i in range(len(numbers)):
        jami += numbers[i]
    return jami
print(sum())
    