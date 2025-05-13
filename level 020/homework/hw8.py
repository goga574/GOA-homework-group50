#  გამოითვალეთ საშუალო არითმეტიკული რიცხვების სიიდან
numbers = [15,23,40,10,50,23,70]

# print(sum(numbers) // len(numbers))
  

#or

sum = 0

for i in numbers:
    sum += i
print(sum // len(numbers))