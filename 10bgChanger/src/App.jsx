import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  
  return (
    <>
      <div style={{backgroundColor: color}}>
        <div>
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
