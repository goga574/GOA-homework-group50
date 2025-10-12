function App() {


  let name = "gabrieli"

  return (
    <header style={{padding:"20px 50px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <h1>My Website</h1>
      <nav style={{display:"flex", gap:"30px"}}>
        <p>home</p>
        <p>contact</p>
        <p>about</p>
        <p>register</p>
        <p>login</p>
      </nav>
    </header>
  )
}

export default App
