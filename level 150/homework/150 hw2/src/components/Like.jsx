
import { useState } from 'react'




function Like() {
    
    let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXmQYFfQQilG5RiOXjS6G0XFv3ArifEHBHA&s"
    let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjinHHb32Adf6bFIX1oSHI62dp59D9FbVPQ&s"

    let [image , imageChanger] = useState(img1)

    

    function imgChanger(){
        if(image === img1){
            imageChanger(img2)
        }else{
            imageChanger(img1)
        }

    }


    return (
        <>
            <img src={image} className='w-10' onClick={imgChanger}/>
            
        </>
    )
}

export default Like


// 8) შექმენით Like კომპონენტი. დაარენდერეთ ეკრანზე:
// --> თეთრი გული, თუ არ არის დალაიკებული(initial State)
// --> წითელი/გაფერადებული გული, როცა გულზე დავაწკაპებთ.
// უნდა შეიძლებოდეს დალაიქება&ლაიიქის მოხსნა
// გამოიყენეთ გულის svg + tailwind