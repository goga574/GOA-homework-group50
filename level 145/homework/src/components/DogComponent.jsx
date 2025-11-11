import React from 'react'

import "./card.css"

import pic from '../assets/images.jpg';

function DogComponent() {
    return (
        <>
            <div className='Dog'>
                <img src={pic} alt="" />
                <h1>My dog</h1>
                <p>Price:500$</p>
            </div>
        </>
    )
}

export default DogComponent