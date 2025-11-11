import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <button>{props.button}</button>
    </div>
  )
}

export default Card