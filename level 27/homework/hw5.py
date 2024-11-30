# დაწერეთ პროგრამა რომელიც ბეჭდავს ყველა რიცხვს 1-100 მდე რომელიც იყოფა 3-ზე და 5-ზეwhile loop:

# i = 0

# while i < 100:
#     if i % 3 == 0  and i  % 5 ==0 :
#         print(i)
#     i += 1

for i in range(1,101):
    if i % 3 == 0 and i % 5 == 0:
        print(i)