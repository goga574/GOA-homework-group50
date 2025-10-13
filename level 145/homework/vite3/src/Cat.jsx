import React from "react";
import img from "/src/assets/img/cat.jpg"

function Cat() {
    return (
        <div className="dogCard">
            <img src={img} alt="" />
            <h2 className="Dog">My Cat</h2>
            <h5 className="dogreview">This Cat is clever</h5>
            <button className="buynow">Buy now</button>
        </div>

    )
}

export default Cat