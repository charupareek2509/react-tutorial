import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  const addValue =() =>{
    let count  = counter+1
    setCounter(count)
  }
 const decreaseValue = ()=>{
  let count = counter -1
    // count = counter<= 0 ?  0 : count
  setCounter(count)
 }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue} >Increase</button><br/><br/>
    <button onClick={decreaseValue} disabled={counter<=0}>Decrease</button>
    </>
  )
}

export default App
