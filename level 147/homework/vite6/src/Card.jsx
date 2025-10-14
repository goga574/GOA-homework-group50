import React from 'react'


function Card({children , topMargin = false, marginAmount = "100px" }) {
    return (
        <div className='card' style={{ marginTop: topMargin ? `${marginAmount}` : "0px"}}>
            
            {children}
        </div>
    )
}

export default Card