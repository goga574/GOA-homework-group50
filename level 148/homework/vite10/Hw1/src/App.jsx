import UserStatus from "./components/UserStatus"

function App() {

  return (
    <>
      <UserStatus userName="giorgi" isOnline={true} />
      <UserStatus userName="giorgi1" isOnline={false} />
    </>
  )
}

export default App

// 5) შექმენით UserStatus კომპონენტი, რომელიც მიიღებს: 
// --> userName
// --> isOnline = false (ნაგულისხმები მნიშვნელობა)
// თუ isOnline == true კომპონენტი დაარენდერებს `{userName} is Online`
// თუ isOnline == false კომპონენტი დაარენდერებს `{userName} is Offline`
// გააკეთეთ ამ კომპონენტის ორი ვარიანტი:
//     1. if else გამოყენებით
//     2. ternary operator გამოყენებით
