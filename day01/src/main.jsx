
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Chai from './chai'
import './index.css'

function Myapp(){
  return(
    <div>
      <h1>Hello, worjdf ramesh dkj</h1>
    </div>
  )
}

// const reactElement={
//   type:'a',
//   props:{
//      href:'https://google.com',
//      target:'_black'
//   },
//   children:'Click me to visit google'

// }
 const anotheruser="chai with code"
const ReactElement=React.createElement(
  'a',{
    href:'https://google.com',
    target:'_black',
    },
  'Click me to visit google',
  anotheruser
)
createRoot(document.getElementById('root')).render(

  ReactElement
 
)
