import React from 'react'

function Product(props) {
    return (
        <>
            <h1>Car name:{props.title}</h1>
            <h2>Car price:{props.price}</h2>
            <img src={props.img} alt="" />
        </>
    )
}

export default Product