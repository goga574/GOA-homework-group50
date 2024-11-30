from turtle import *

#draw a castle
penup()
goto(-600, -350)
pendown()

speed(20)
width(4)
#first tower of the castle

color("brown") #the color of the first tower
begin_fill()
forward(150) #width of the tower
left(90)
forward(400) #height of the tower
left(90)
forward(150)
left(90)
forward(400)
end_fill()

left(180)
forward(400)

#lets draw a roof of the first tower

left(90)
color("orange")
begin_fill()
forward(30) 
right(90)
forward(80) #the height of the roof
right(90)
forward(30) 
right(90)
forward(20) 
left(90)
forward(30)
left(90)
forward(20)
right(90)
forward(30)
right(90)
forward(20)
left(90)
forward(30)
left(90)
forward(20)
right(90)
forward(30)
right(90)
forward(20)
left(90)
forward(30)
left(90)
forward(20)
right(90)
forward(30)
right(90)
forward(80)
right(90)
forward(180)
end_fill()
#end of the first tower's roof


#lets draw a window for the first tower
penup()
goto(-520, -100)
pendown()
color("grey")
begin_fill()
circle(25)
end_fill()
#end of the window

penup()
goto(-600, -350)
pendown()

#lets build a middle section of the castle
color("brown")
left(180) 
forward(150) 
left(90)
forward(25)
right(90)
forward(160) 
right(90)
begin_fill()
forward(25)
left(90)
forward(230) #width of the door
left(90)
forward(250) #height of the door
left(90)
end_fill()

color("orange")
begin_fill()
forward(230)
right(90)
forward(35)
right(90)
forward(40)
right(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
right(90)
forward(40)
right(90)
forward(39)
end_fill()
right(90)
forward(230)
color("brown")
left(90)
forward(246)

left(90)
forward(70)


# draw a black door
color("black")
begin_fill()
left(90)
forward(160)
right(90)
forward(90)
right(90)
forward(160)
end_fill()
right(90)

#i made a mistake here so i had to ...fix it somehow  (i did it:D)
begin_fill()
color("brown")
forward(160)
right(90)
forward(25)
left(90)
forward(160)
right(90)
forward(310)
right(90)
forward(550)
right(90)
forward(310)
right(90)
forward(160)
right(90)
width(1)
forward(263)
left(90)
forward(43)
left(90)
forward(30)
right(90)
forward(25)
right(90)
forward(30)
left(90)
forward(35)
left(90)
forward(30)
right(90)
forward(25)
right(90)
forward(30)
left(90)
forward(35)
left(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
left(90)
forward(40)
left(90)
forward(265)
left(90)
forward(70)
left(90)
forward(140)
right(90)
forward(165)
left(90)
forward(82)
left(90)
forward(230)
left(90)
forward(220)
right(90)
forward(160)
end_fill()
width(4)
begin_fill()
left(90)
forward(25)
left(90)
forward(550)
left(90)
forward(25)
left(90)
forward(160)
left(90)
forward(21)
right(90)
forward(210)
right(90)
forward(25)
left(90)
forward(180)
end_fill()
width(3)
color("black")
left(90)
forward(27)
left(180)
forward(395)
left(90)
forward(155)
left(90)
forward(400)
left(90)
forward(705)
left(90)
forward(340)
left(90)
forward(550)
left(90)
forward(340)
left(90)
forward(155)
left(90)
forward(250)
right(90)
forward(235)
right(90)
forward(250)
left(90)
forward(160) 


#it is time to build the second tower
color("brown")
begin_fill()
forward(150)
left(90)
forward(400)
left(90)
forward(150)
left(90)
forward(400)
end_fill()

width(3)
color("black")
left(90)
forward(150)
left(90)
forward(400)
left(90)
forward(150)
left(90)
forward(400)
#end of the second tower

width(4)
left(180)
forward(400)

#lets draw a roof for the second tower
left(90)
begin_fill()
color("orange")
forward(30) 
right(90)
forward(80) 
right(90)
forward(30)  
right(90)
forward(20) 
left(90)
forward(30)
left(90)
forward(20)
right(90)
forward(30)
right(90)
forward(20)
left(90)
forward(30)
left(90)
forward(20)
right(90)
forward(30)
right(90)
forward(20)
left(90)
forward(30)
left(90)
forward(20)
right(90)
forward(30)
right(90)
forward(80)
right(90)
forward(180)
end_fill()
left(180)

color("black")
forward(150)



#the second window down below
left(180)
forward(80)
left(90)
color("brown")
forward(160)
color("grey")
begin_fill()
circle(25)
end_fill()
#end of window

color("black")
penup()
goto(-600, -350)
pendown()
 
width(2)
left(180)
forward(395)
right(90)
forward(150)
right(90)
forward(60)
left(90)
forward(165)

color("brown")
width(4)
begin_fill()
left(90)
forward(220)   #height of the last tower
right(90)
forward(230)    #width of the last tower
right(90)
forward(220)
end_fill()
color("black")
right(90)
forward(235)


#lets draw a window for the last tower

left(180)
forward(145)
color("brown")
left(90)
forward(100)

color("grey")
begin_fill()
circle(30)
end_fill()

color("brown")
left(180)
forward(100)
right(90)
color("black")
forward(30)
left(180)
forward(120)
left(90)
forward(220)
left(90)
forward(230)
left(90)
forward(220)
left(180)
forward(225)




#lets draw a roof

color("orange")
begin_fill()
right(60)
forward(130)
right(60)
forward(135)
right(150)
forward(230)
end_fill()
right(150)
forward(100)

#end of roof


#drawing a flag of G O A
color("black")
penup()
goto(103, 102)
pendown()
color("orange")
left(50)
begin_fill()
forward(10)
color("red")
forward(230)
color("green")
right(80)
forward(320)
right(100)
forward(160)
right(80)
forward(320)
end_fill()
left(180)
forward(70)
left(90)
color("black")
forward(120)
right(180)
forward(80)
color("green")
forward(40)
right(180)
forward(40)
width(5)
color("black")
forward(80)
right(90)
forward(60)


# G
right(180)
forward(60)
left(90)
forward(80)
left(90)
forward(60)
left(90)
forward(35)
left(90)
forward(20)


#O
right(180)
forward(20)
color("green")
forward(20)
right(90)
color("black")
forward(35)
left(90)
forward(60)
left(90)
forward(80)
left(90)
forward(60)
left(90)
forward(80)
left(90)
forward(62)
color("green")
forward(20)
right(290)
color("black")
forward(85)
right(140)
forward(85)
right(180)
forward(30)
left(70)
forward(40)


exitonclick()
