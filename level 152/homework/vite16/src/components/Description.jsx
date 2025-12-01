import React from 'react'
import { useState } from 'react'


function Description() {

    let [desc, setDesc] = useState("")
    let [finalDesc, setFinalDesc] = useState("No Description")

    function handleChange(e){
        e.preventDefault()
        setFinalDesc(desc)
    }

    return (
        <>
            <form onSubmit={handleChange}>
                <textarea name="desc" id="" className='border-2' onChange={(e) => setDesc(e.target.value)}></textarea>
                <br />
                <input type="submit" className='border-2'/>
            </form>

            
            <p>{finalDesc === "No Description"
                    ? "No Description"
                    : `Your Description: ${finalDesc}`}</p>
        </>
    )
}

export default Description


// 5) შექმენით Description კომპონენტი.
// შექმენით form ერთი textarea და submit ღილაკით, ასევე p ტეგი
// --> p ტეგში თავიდან უნდა ეწეროს No Description
// --> როცა მომხმარებელი ჩაწერს ტექსტს და დაასაბმითებს ამ p ტეგის მნიშვნელობა უნდა გახდეს `Your Description: {desc}`
