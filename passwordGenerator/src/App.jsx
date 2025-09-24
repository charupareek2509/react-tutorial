import { useState,  useCallback, useEffect, useRef } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%&*(){}+_-"
    console.log("str", str);
    

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  }, [length, setPassword, numberAllowed, characterAllowed])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-xl  px-4 my-8 text-orange-500 bg-gray-700'>
      <h2 className='text-white text=-center '>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPassword}
        >Copy</button>
      </div>
      <div className='felx text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="numberInput" 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=> !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="charInput" 
          defaultChecked={characterAllowed}
          onChange={()=>{
            setCharacterAllowed((prev)=> !prev)
          }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
