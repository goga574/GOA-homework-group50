import React from 'react'

function UserStatus({userName,isOnline = false}) {

    

    return (
        <>
            {isOnline ? <h1>{userName} is online</h1> : <h1>{userName} is offline</h1>}
        </>
    )
}

export default UserStatus


// 5) შექმენით UserStatus კომპონენტი, რომელიც მიიღებს: 
// --> userName
// --> isOnline = false (ნაგულისხმები მნიშვნელობა)
// თუ isOnline == true კომპონენტი დაარენდერებს `{userName} is Online`
// თუ isOnline == false კომპონენტი დაარენდერებს `{userName} is Offline`
// გააკეთეთ ამ კომპონენტის ორი ვარიანტი:
//     1. if else გამოყენებით
//     2. ternary operator გამოყენებით
