import React from "react";
import "./card.css"
import img from "/public/img/gowi.jpg"

function Card() {
    return (
        <>
            <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 50px"}}>
                <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"30px"}}>
                    <li style={{listStyleType:"none"}}>home</li>
                    <li  style={{listStyleType:"none"}}>contact us</li>
                    <li  style={{listStyleType:"none"}}>about us</li>
                    <li  style={{listStyleType:"none"}}>resistration</li>
                    <li  style={{listStyleType:"none"}}>login</li>
                </nav>
                <button>Register</button>
            </header>
            
        </>
    )
}


export default Card
