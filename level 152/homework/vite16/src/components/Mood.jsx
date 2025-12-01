import React from 'react'
import { useState } from 'react'

function Mood() {

    let [mood,setMood] = useState("")

    function moodfunc(e){
        e.preventDefault()
        setMood(e.target.mood.value)
    }

    return (
        <>
            <form onSubmit={moodfunc}>
                <label htmlFor="mood">Enter Your Mood: </label>
                <input type="text" id='mood' className='border-2' name='mood'/>
                <br />
                <input type="submit" className='border-2'/>
            </form>

            <p>
                {
                    mood === "happy"? `Your Mood: 😀`: mood ==="sad"?`Your Mood: 🙁`: mood === "scared"?`Your Mood: 😰`: mood === "angry"? `Your Mood: 😡`: 'Your Mood: Unknown🤷‍♂️'
                    }
            </p>
        </>
    )
}

export default Mood




// 6) შექმენით Mood კომპონენტი
// მომხმარებელს მოთხოვეთ შემოიყვანოს, თუ როგორ ხასიათზეა
// --> თუ happy მაშინ დაარენდერეთ `Your Mood: 😀`
// --> თუ sad მაშინ დაარენდერეთ `Your Mood: 🙁`
// --> თუ scared მაშინ დაარენდერეთ `Your Mood: 😰`
// --> თუ angryმაშინ დაარენდერეთ `Your Mood: 😡`
// ყველა სხვა შემთხვევაში 'Your Mood: Unknown🤷‍♂️`