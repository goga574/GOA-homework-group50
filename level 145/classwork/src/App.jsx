import { useState } from 'react'


function App() {
  

  let username = "goga"
  console.log(username)

  return (
    <>
      <p>{username}</p>
    </>
  )
}

export default App


// statefull --> როდესაც არსებობს შიგნით ფუნქციონალი --->მაგ რომ მაქვს ღილაკი რაღაც უნდა მოხდეს(ანუ რაღაცაზე ზემოქმედებით რაღაც მოხდეს)

// stateless --> არ არის ფუნქციონალი 