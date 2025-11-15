import React from 'react'

function UserCard({name , username , age , sqesi , friendlist , isOnline = false}) {
    return (
        <>
            <p>name:{name}</p>
            <p>username:{username}</p>
            <p>age:{age}</p>
            <p>Male/Female:{sqesi}</p>
            <p>user's Friends are :{friendlist[0]} also {friendlist[1]} and {friendlist[2]} </p>
            <p>isOnline:{isOnline? `${name} is online` : `${name} is offline`}</p>
        </>
    )
}

export default UserCard


// 7) შექმენით UserCard კომპონენტი. რომელიც მიიღებს: სახელს, გვარს, ასაკს, სქესს, მეგობრების სიას,(ისეთი როგორც დავალება 6 ში), სტატუსს(isOnline) და ა.შ.
// -> მოახდინეთ props დესტრუქცია ფუნქციის პარამეტრშივე
// -> გააფორმეთ და გამოსახეთ ეს მონაცემები
// -> გამოიყენეთ დავალება 5 ის კომპონენტი რათა გამოსახოთ User ის სტატუსი
// -> გამოიყენეთ დავალება 6 ის კომპონენტი რათა გამოსახოთ User ის მეგობრები
// ცოტა შეალამაზეთ ეს კომპონენტი