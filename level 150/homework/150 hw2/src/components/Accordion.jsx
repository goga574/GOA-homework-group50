import React from 'react'
import { useState } from 'react'


function Accordion() {

    let [Accordion, accChanger] = useState(false)

    function divAppear() {
        if (Accordion) {
            accChanger(false)
        } else {
            accChanger(true)
        }
    }


    return (
        <>
            <button className='border-2 mt-[100px]' onClick={divAppear}>createDiv</button>

            <div className={Accordion ? "hidden" : "block"}>
                <p>მე აქ ვარ</p>
            </div>
        </>
    )
}

export default Accordion



// 10) შექმენით Accordion კომპონენტი. ეკრანზე უნდა იყოს ერთგვარი ღილაკი, რომლის შიგთავსიც იქნება:
// --> 'Open Accordion', თუ აკორდიონი დახურულია
// --> 'Close Accordion', თუ აკორდიონი ღიაა
// ღილაკზე დაჭერით, ეკრანზე(სადაც გინდათ) უნდა გამოჩნდეს div ტეგი რაიმე შიგთავსით/ტექსტით
//     -აკორდიონი ღიაა, როცა ეს div ტეგი ჩანს
//     -აკორდიონი დახურულია, როცა ეს div ტეგი არ ჩანს(ვგულისხმობ HTML სტრუქტურა საერთოდ არაა)