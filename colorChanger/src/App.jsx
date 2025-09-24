import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: color}}>
    </div>
    <div className='fixed flex flex-wrap justify-center bottom-48 px-2 inset-x-0'>
    <div className='felx flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl' >
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button><button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
    </div>
    </div>
    </>
  )
}

export default App
