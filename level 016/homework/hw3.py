# 3) შეადარეთ თქვენი ასაკი მომხმარებლის შემოტანილ ასაკს, თუ თქვენი ასაკი მეტია  მომხმარებლის ასაკზე უთხარით რომ თქვენ მასზე დიდი ხართ, თუ მასზე პატარა ხართ დაუპრინტეთ რომ მასზე პატარა ხართ და სხვა  შემთხვევაში დაუპრინტეთ რომ ტოლები ხართ.

age = int(input("enter your age:"))

my_age = 19


if my_age > age:
    print("i am older then you")
elif my_age < age:
    print("im younger then you")
else :
    print("we have same age")