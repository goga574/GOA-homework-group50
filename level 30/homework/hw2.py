# 2)  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი

numbers = [1, 4 ,5 ,10]

def sum1(nums):
                                                            
    jami =0
    for i in nums:
        jami += i                           
    
    return jami
print(sum1(numbers))


