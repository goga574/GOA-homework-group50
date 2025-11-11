import React from 'react'
import cat from '../assets/cat.jpg';

function CarComponent(image) {
  return (
    <>
      <div className='Dog'>
          <img src={cat} alt=""  className='catimg'/>
          <h1>cat</h1>
          <p>Price:200$</p>
      </div>
    </>
  )
}

export default CarComponent