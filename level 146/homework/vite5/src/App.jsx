import { useState } from 'react'
import Greeting from './Greeting'
import Product from './Product'
import DrawRec from './DrawRec'

function App() {
 
  return (
    <>
     <Greeting name="გოგა"/>
     <Greeting name="ირმა"/>
     <Greeting name="გიორგი"/>


     <Product title="BMW" price="25000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi4w7eLWCYWnvN9LH6VIU3NUvFArs78WoRw&s"/>
     <Product title="Mercedes" price="35000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYqkV4ci2165MHjVwn6HZrf1ohGXJSaTEag&s"/>
     <Product title="Lamborghini" price="85000$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aKamGJt46N33o_F9t2lk8Czkn36Rp5_Ljw&s"/>

     
     <DrawRec color="red" width="200px" height="300px"/>
     <DrawRec color="blue" width="500px" height="300px"/>
     <DrawRec color="purple" width="200px" height="100px"/>
    </>
  )
}

export default App



// 1) ახსენით რა არის props? რაში გვეხმარება იგი? რატომ არის კარგი პრაქტიკა, რომ ერთსა და იმავე კომპონენტს სხვადასხვა მონაცემები გადავცეთ?

// Props არის იგივე ატრიბუტი რომელიც შეგვიძლია გავატანოთ ჩვენს კომპონენტს,ძალიან გვიმარტივებს საქმეს იმიტომ რომ აღარ გვიწევს სხვადასხვა კომპონენტების შექმნა იმისათვის რომ შიგნით განსხვავებული ინფორმაცია შევიტანოთ,ამის ნაცვლად შეგვიძლია კონპონენტს გავატენოთ ჩვენთვის სარუველი props ები



// 2) ახსენით რა განსხვავებაა HTML ატრიბუტებსა და React props ებს შორის
// html ში ატრიბუტი გვაძლევდა დამატებით ინფორმაციას თეგზე და მათ პირდაპირ თეგის გამხსნელ თეგში ვწერდით,html ში ეს ატრიბუტი გამოიყენებოდა თეგის ქცევის შეცვლისათვის და რეაქთში გამოიყენება ელემენტის შიგთავსის შესახვლელად,ასევე პროპსი გვაძლევს ობიექტს

// 3) შექმენით <Greeting /> კომპონენტი, რომელიც მიიღებს name props ს
// ამ კომპონენტმა უნდა დაარენდეროს: 'გამარჯობა {name}'
// --> რამოდენიმეჯერ გამოიყენეთ ეს კომპონენტი სხვადასხვა სახელებით

// 4) შექმენით <Product /> კომპონენტი, რომელიც მიიღებს:
// --> title
// --> price
// --> image
// რამოდენიმეჯერ გამოიყენეთ ეს კომპონენტი სხვადასხვა მონაცემებით

// 5) შექმენით <DrawRec/> კომპონენტი, რომელიც მიიღებს props ებს:
// --> color
// --> width
// --> height
// ამ კომპონენტმა უნდა დაარენდეროს ოთხკუთხედი, რომელსაც ექნება გარკვეული სიგრძე, სიგანე და Background ფერი