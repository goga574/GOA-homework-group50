import React from 'react'

function UserFriend() {
    let list = [
        { name: 'Jon', status: 'offline', profilePic: '😎' },
        { name: 'Bob', status: 'online', profilePic: '🤗' }
    ]

    return (
        <>
            <div>
                
                <h1> This is Your Friends list:</h1>
                <p>{`${list[0].profilePic} ${list[0].name} is ${list[0].status}`}</p>
                <p>{`${list[1].profilePic} ${list[1].name} is ${list[1].status}`}</p> 
                
            </div>
        </>
    )
}

export default UserFriend

// 6) შექმენით UserFriends კომპონენტი რომელიც მიიღებს შემდეგი სახის სიას:
// [
//   { name: 'Jon', status: 'offline', profilePic: '😎'},
//   { name: 'Bob', status: 'online', profilePic: '🤗' }
// ]
// ამ კომპონენტმა უნდა დაამუშავოს ეს სია და დაარენდეროს:
//     This is Your Friends list:
//         * 😎 Jon is offline
//         * 🤗 Bob is online
// თუ სია ცარიელია -> You Don't Have Friends Yet.
// P.S დაიხმარეთ 5 დავალების კომპონენტი