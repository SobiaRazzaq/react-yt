// in React data move from top to bottom easily  (called props drilling)
// but from bottom to top is not possible so here we have a way for this work 

// next topic context api mean data centeralization (it can also apply through the redux) mean every or any component can access the same data and context api is used for mid size application(state management is used) , things required(  1) context 2)provider 3)useContext)

import React, { useState } from 'react'
import Navbar from './components/Navbar'


const App = () => {
  const [Theme, setTheme] = useState('light')
  return (
    <div className=' flex flex-col  h-screen w-full bg-black text-white px-30  items-center justify-center'>
   <h1>Theme is {Theme}</h1>
   <Navbar theme ={Theme} settheme = {setTheme} />
    </div>
  )
}

export default App
