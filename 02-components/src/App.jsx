import React from 'react'
import Card from './components/Card.jsx'

// mostly when we done coding in react we keep the app.jsx file empty because it is the initial file we use component based structure (components is a piece of code for a specific feature)
const App = () => {
  const age = 89
  return (
    <>
     <Card/>
    {/* <div className='card'>
      <h1>sobia</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum libero quisquam, facere nisi cupiditate aspernatur ea, eaque, sapiente quidem ipsa ipsum exercitationem debitis enim? Itaque labore inventore maxime maiores quidem!</p>
    </div> */}
    {/* to print any variable we use {} brackets  */}
    {/* <h2>I am {age} year old</h2>   age variable just before return */}
    {/* {Card()}  */}
    {/* or */}
 {/* ___________________________________________  to use same component with different data/contnet we use props in 03-props folder   */}
    </>
  )
}

export default App
