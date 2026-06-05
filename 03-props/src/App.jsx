import React from 'react'
import Card from './components/Card'
import Cardpropsout from './components/Card'

const App = () => {
  return (
    <>
    <div className='parent'>
      {/* <Cardpropsout/> */}
      {/* props it is like a property  */}
       <Card user='Sobia Razzaq' age={21} img = 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
       <Card user='Mahnoor Rafique' age={23} img = 'https://images.unsplash.com/photo-1775060224937-c32b39af8e5e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
      <Card user='Aman' age={18} img= 'https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
      
    </div>
    </>
  )
}

export default App
