import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
//  let counter=12;

 const addValue=()=>{
  // 
 
  if(counter<20){
    counter=counter+1;
  setCounter(counter);
  }
  
  // console.log("value add",counter)
 }

 const RemoveValue=()=>{
  // 
 
  if(counter>0){
    counter=counter-1;
  setCounter(counter);
  }
  // console.log("remove add",counter)
 }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value: {counter}</button>
      <br/>
      <button
      onClick={RemoveValue}
      >remove value  {counter}</button>
    </>
  )
}

export default App
