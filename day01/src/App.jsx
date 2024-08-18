import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './chai'

function App() {
 const username="suraj patel"

  return (
    <>
   <Chai/>
   <h1>Hello world {username}</h1>
   </>
  )
}

export default App
