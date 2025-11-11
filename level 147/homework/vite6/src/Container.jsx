import React from 'react'

function Container(props) {

    console.log(props.children)
    return (
        <>
            <h1>tavdapirveli</h1>
            {props.children[2]}
        </>
    )
}

export default Container