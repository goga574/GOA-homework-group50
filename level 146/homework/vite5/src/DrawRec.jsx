import React from 'react'

function DrawRec(props) {
    // let style = {
    //     backgroundColor: props.color,
    //     width: props.width,
    //     height: props.height,
    // }

    return (
        <div style={{backgroundColor:props.color,width:props.width,height:props.height}}></div>
    )
}

export default DrawRec