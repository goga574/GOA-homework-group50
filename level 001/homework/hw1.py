
from turtle import *

#i want to build a house for my homework

speed(20)
width(5)
color("brown")
backward(320)
left(90)

forward(320)
right(90)

forward(320)
right(90)

forward(320)
right(90)

#lets build a door
color("purple")
forward(90)
right(90)
color("blue") #the color of the door
forward(120)
left(90)


forward(120)
left(90)

forward(120)

#lets build a roof,we dont want to get wet soooo... :D
penup()
goto(0, 320)
pendown()
color("yellow")
begin_fill()
right(120)
forward(175)
left(57)
forward(187)
end_fill()

#house also wants a window,lets do it
penup()
goto(-180, 170)
pendown()
color("purple")
right(27)
forward(80)
right(90)
forward(90)
right(90)
forward(90)
right(90)
forward(90)
right(90)
forward(45)
right(90)
forward(90)
right(90)
forward(45)
right(90)
forward(45)
right(90)
forward(90)
#end of window

penup()
goto(0, 0)
pendown()



color("brown")
forward(150)
right(90)
color("blue")
forward(120)

penup()
goto(0, 0)
pendown()
right(90)

#garden and dog's house
color("green")
forward(700)
left(90)

color("red")

forward(150)
left(90)

forward(150)
left(90)

forward(150)
left(90)

forward(150)
backward(27)
left(90)

color("purple")
forward(80)
left(90)

forward(80)
left(90)

forward(80)

color("red")
right(90)
forward(44)
right(90)
forward(150)

#roof for dog's little house
begin_fill
right(45)
forward(100)
right(86)
forward(106)
#end of the roof

penup()
goto(0, 0)
pendown()

#now it's time to plant a tree
color("green")
right(319)
forward(250)
left(90)
penup()
goto(255, 0)
pendown()
forward(280)


left(140)
forward(30)
right(180)
forward(30)
right(100)
forward(30)

penup()
goto(255, 0)
pendown()

right(220)
forward(240)
left(140)
forward(45)
left(180)
forward(45)
right(100)
forward(45)

penup()
goto(255,0)
pendown()
right(220)

forward(190)
left(140)
forward(55)
left(180)
forward(57)
right(100)
forward(57)

penup()
goto(255, 0)
pendown()
right(220)

forward(140)
left(140)
forward(68)
right(180)
forward(68)
right(100)
forward(68)

penup()
goto(255,0)
pendown()
right(220)

forward(80)
left(140)
forward(78)
right(180)
forward(78)
right(100)
forward(78)

penup()
goto(480, 300)
pendown()

#i think birds will be suitable too
color("black")
forward(26)
left(100)
forward(26)

#the second bird
penup()
goto(400, 320)
pendown()

right(180)
forward(26)
right(100)
forward(26)

#i think homework is done <3









exitonclick()



