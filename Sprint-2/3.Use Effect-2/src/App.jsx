import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer'

function App() {
  const [show,setShow]=useState(true);

  return (
    <div className="App">
      {show?<Timer start= "0" end="10"/>:""}
      <button
      onClick={()=>{
        setShow(!show);
      }}>{show ? "Hide":"Show"}</button>
    </div>
  )
}

export default App
