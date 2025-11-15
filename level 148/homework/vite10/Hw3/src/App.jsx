import UserCard from "./components/UserCard"

function App() {


  return (
    <>
        <UserCard name="giorgi" username={"chalauri"} age={15} friendlist={["girogi " , "irma " , "ana"]} isOnline={true}/>
    </>
  )
}

export default App


// 7) შექმენით UserCard კომპონენტი. რომელიც მიიღებს: სახელს, გვარს, ასაკს, სქესს, მეგობრების სიას,(ისეთი როგორც დავალება 6 ში), სტატუსს(isOnline) და ა.შ.
// -> მოახდინეთ props დესტრუქცია ფუნქციის პარამეტრშივე
// -> გააფორმეთ და გამოსახეთ ეს მონაცემები
// -> გამოიყენეთ დავალება 5 ის კომპონენტი რათა გამოსახოთ User ის სტატუსი
// -> გამოიყენეთ დავალება 6 ის კომპონენტი რათა გამოსახოთ User ის მეგობრები
// ცოტა შეალამაზეთ ეს კომპონენტი