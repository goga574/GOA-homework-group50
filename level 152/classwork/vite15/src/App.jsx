import { useState } from 'react'



// function App() {
//   let [state , setState] = useState("my name is goga")


//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={()=>{
//         if(state){
//           setState("")
//         }else{
//           setState("my name is goga")
//         }
//       }}>click</button>
//     </>
//   )
// }


import Image from './Image'



// function App() {
//   let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94fQLCyLFZWY51LGm-831HI-Mf2nDPT9u5w&s"
//   let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXmQYFfQQilG5RiOXjS6G0XFv3ArifEHBHA&s"

//   let [state , setState] = useState(img1)


//   return (
//     <>
//       <img src={state}/>
//       <button onClick={()=>{
//         state === img1 ? setState(img2) : setState(img1)
//       }}>click</button>
      
//     </>
//   )
// }


// export default App


// შექმენი კომპონენტი, სადაც ერთი სურათია.
// პირობა: ღილაკზე დაჭერით სურათი შეიცვალოს მეორე URL-ზე, კიდევ ერთხელ დაჭერით — დაბრუნდეს პირვანდელზე.
// ანუ დინამიურად უნდა ცვლიდე სთეითს ორ მნიშვნელობას შორის.


function App() {
  
  

  let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY4ZhdaTaeaDiMrEl_YRU8_8txhzBh2hQcA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F2gtHze1bw0WE2lwnMWk1695uBfImJUP8Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnd5E5byXsNpo1GewujlKPH900W9dimQJnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvfdzlviNRbd_jUoULocgggXfwo1hS1sjEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKFXnQPm3COQ9nPZiMmbhvfo-sAHvBozV_A&s"
  ]

  let [state , setState] = useState(0)

  return (
    <>
    <div className='flex gap-2 ml-[300px]'>
      <button onClick={()=>{
        state === images.length-1 ? setState(0) :  setState(state+1)
      }}>next</button>

      <img src={images[state]} />

      <button onClick={()=>{
        state === 0 ? setState(images.length -1) : setState(state-1)
      }}>Back</button>

    </div>
    
    </>
  )
}


export default App