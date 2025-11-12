import { useState } from 'react'
import Name from './Name'
import Container from './Container'
import Card from './Card'
import "./index.css"

function App() {

  
  return (
    <>
      <Name name="giorgi" bio="gori" age={20} />
      <Name name="giorgi" bio="gori" />
      <Name name="giorgi" age={20} />


      <Container>
        <ul>
          <li>goga</li>
          <li>goga1</li>
          <li>goga2</li>
        </ul>
        <p>hi bosas</p>
        <button>click</button>
      </Container>


      <hr />

      <Card>
        <h1>goga</h1>
        <p>div</p>
      </Card>

      <Card topMargin = {true} marginAmount= {"200px"}>
        <h1>goga</h1>
        <p>div</p>
      </Card>

    </>
  )
}

export default App



// 1) ახსენით რა არის Props Rest და როდის არის იგი საჭირო?

// rest გვეხმარება იმაში რომ შევინახოთ შიგნით გარკვეული რაოდენობის props ები და შემდეგ ამ რესთიდან მივწვდეთ რომელსაც გვინდა იმ მნიშვნელობას

