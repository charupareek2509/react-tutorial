
import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Modern Design Solutions" btnText="Learn More..."/>
      <Card username="Modern Art Design" btnText="Read More..." />

    </>
  )
}

export default App
