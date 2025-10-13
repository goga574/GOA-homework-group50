import React from "react";
import img from "/src/assets/img/dog1.jpg"
import Cat from './Cat'
import Dragon from "./dragon";

function Dog() {
    return (
        <main>
            <div className="dogCard">
                <img src={img} alt="" />
                <h2 className="Dog">My Dog</h2>
                <h5 className="dogreview">This dog is clever</h5>
                <button className="buynow">Buy now</button>
            </div>
            <Cat/>
            <Dragon/>
        </main>

    )
}

export default Dog