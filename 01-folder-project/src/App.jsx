// Process to create react App 
// 1 create folder by cmd -> npm create vite 
// 2 to run app by cmd ->  npm run dev 



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// it is a child of main.jsx
// function App() {
//   return <h1>Hello Guys!</h1>
// }

// export default App

// or 

// import React from 'react'

const App = () => {
  return (
    // cannot return two thing at a time in function 
    // <div> App</div>
    // when we wrtie h1 and  a div then error generated
    // <h1>hello </h1>
    // solution here is we create an empty tsg then pass as many as we want to pass hings in it like given below
   <>
   <div id="parent"> 
    <h1 id="child1">hello</h1>
    <p id="child1">the is the function </p>
   </div> 
   <div id="A">
    <h1 id="child3">hello</h1>
   </div>
   <div id="B">
    <h1 id="child4">hello</h1>
   </div>
   </>
  )
}

export default App

