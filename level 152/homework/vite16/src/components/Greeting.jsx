import React from 'react'
import { useState } from 'react'

function Greeting() {

    let [name,setName] = useState("")

    function handleChange(e){
        setName(e.target.value)
    }

    return (
        <>
            <form >
                <label htmlFor="">Enter Name:</label>
                <input type="text" className='border-2' onChange={handleChange}/>
            </form>

            <p>Hello, {name}</p>
        </>
    )
}

export default Greeting



// 4) შექმენით Greeting კომპონენტი.
// შექმენით form ერთი input ით
// --> მომხმარებელი წერს თავის სახელს, და ეკრანზე იმავე დროს გამოჩნდება შეტყობინება.
// --> ყოველ ახალ დაწერილ სიმბოლოზე ხელახლა უნდა დარენდერდეს - `Hello, {name}`