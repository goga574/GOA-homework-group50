import { useState } from 'react'


function App() {


  let [counter,setCounter] = useState(0)

  // state , statechanger
  
  
  function plus(){
    setCounter(counter + 1)
  }

  function minus(){
    setCounter(counter-1) 
    
  }



  return (
    <>
      <p  className={`text-3xl ${counter > 0 ?"text-green-500" :counter === 0 ? "text-white": "text-red-600"}`}>{counter}</p>
      <button className='text-[40px] border-2 px-5 py-1' onClick={plus}>+</button>
      <button className='text-[40px] border-2 px-5 py-1' onClick={minus}>-</button>

    </>


  )
}

export default App

// hook - კაუჭი
// statefull
