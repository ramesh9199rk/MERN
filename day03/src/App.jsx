import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind Test</h1>

 <Card  item="ramesh" price="$220"/>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4 mt-4'>Tailwind Test</h1>

 <Card item="suraj patel"  price="$120"/>

    </>
  )
}

export default App
