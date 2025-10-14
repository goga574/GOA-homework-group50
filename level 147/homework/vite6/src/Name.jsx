import React from 'react'

function Name({name , bio = "No Bio" , age = 18}) {

  return (
    <div>
        <p>my name is {name}</p>
        <p>BIO:{bio}</p>
        <p>my age is {age}</p>
    </div>
  )
}

export default Name