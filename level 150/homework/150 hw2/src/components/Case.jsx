import React from 'react'
import { useState } from 'react'


function Case() {

    let [text , caseChanger] = useState("goga aris chemi saxeli")   



    function change(){
        if(text === text.toUpperCase()){
            caseChanger(text.toLowerCase())
        }else{
            caseChanger(text.toUpperCase())
        }
    }
    

    return (
        <>
            <p>{text}</p> 
            <button onClick={change}>Click</button>
        </>
    )
}

export default Case



// 7) შექმენით CaseChanger კომპონენტი. ეკრანზე გამოაჩინეთ რაიმე გრძელი ტექსტი + ღილაკი.
// --> ღილაკზე დაჭერით თუ ტექსტი UPPERCASE არის უნდა და_lowercase_დეს და თუ lowercase არის უნდა და_UPPERCASE_დეს.
