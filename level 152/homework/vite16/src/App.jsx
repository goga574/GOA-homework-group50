import { useState } from 'react'
import Mood from './components/Mood'
import Greeting from './components/Greeting'
import Description from './components/Description'

function App() {

  return (
    <>
      {/* <Greeting/> */}
      {/* <Description/> */}
      <Mood/>
    </>
  )
}

export default App




// 1) რა განსხვავებაა input-ის value და placeholder-ს შორის?


// input value არის ის ტექსტი რაც მომხმარებელს შეყავს ინფუთში და placeholder არის დამხმარე ტექსტი რომელიც მხოლო დ მაშინ ჩანს როდესაც მომხმარებელს არაფერი ჩაუწერია ჯერ ინფუთ ველში

// ============================================

// 2) რას აკეთებს onChange ფუნქცია?

//ეს ფუნქცია გამოიძახება მაშინ როდესაც რაღაც იცვლება,მაგალითად ინფუთში ყოველი ასოს შეყვანაზე გამოიძახება ეს ფუნქცია და მოგვცემს იმ შედეგს რასაც ფუნქცია აბრუნებს(აკეთებს) 


// ============================================


