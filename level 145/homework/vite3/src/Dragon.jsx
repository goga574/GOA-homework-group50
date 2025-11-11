import React from "react";
import img from "/src/assets/img/dragon.jpg"

function Dragon() {
    return (
        <div className="dogCard">
            <img src={img} alt="" />
            <h2 className="Dog">My Dragon</h2>
            <h5 className="dogreview">This Dragon is clever</h5>
            <button className="buynow">Buy now</button>
        </div>
    )
}

export default Dragon