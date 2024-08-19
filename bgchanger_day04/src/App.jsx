// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <>
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor:color}}
//     >
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-2
//         shadow-lg bg-white px-3 py-2 rounded -3xl'>
//           <button
//           onClick={()=> setColor("red")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//           style={{backgroundColor:"red"}}
//           >Red</button>

//         <button
//         onClick={()=> setColor("green")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//           style={{backgroundColor:"green"}}
//           >green</button>

// <button
// onClick={()=> setColor("blue")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//           style={{backgroundColor:"blue"}}
//           >blue</button>

// <button
// onClick={()=> setColor("black")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
//           style={{backgroundColor:"black"}}
//           >black</button>



//         </div>
//       </div>
//     </div>
      
//     </>
//   )
// }

// export default App

import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
      <div style={{ position: "fixed", bottom: "12px", width: "100%", display: "flex", justifyContent: "center", padding: "0 2px" }}>
        <div style={{ display: "flex", gap: "8px", backgroundColor: "white", padding: "8px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
          <button onClick={() => setColor("red")} style={{ backgroundColor: "red", color: "white", padding: "8px 16px", borderRadius: "12px", border: "none" }}>Red</button>
          <button onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white", padding: "8px 16px", borderRadius: "12px", border: "none" }}>Green</button>
          <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white", padding: "8px 16px", borderRadius: "12px", border: "none" }}>Blue</button>
          <button onClick={() => setColor("black")} style={{ backgroundColor: "black", color: "white", padding: "8px 16px", borderRadius: "12px", border: "none" }}>Black</button>
          <button onClick={() => setColor("olive")} style={{ backgroundColor: "olive", color: "white", padding: "8px 16px", borderRadius: "12px", border: "none" }}>Olive</button>
        </div>
      </div>
    </div>
  );
}

export default App;
