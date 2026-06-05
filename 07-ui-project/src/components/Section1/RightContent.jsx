import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
    // console.log(props.users);

  return (
    <div  id='right'  className='h-full flex overflow-x-auto rounded-4xl gap-5 flex-nowrap w-2/3 p-6 '>
     {props.users.map(function(elem, idx){
        return <RightCard key={idx}  color={elem.color} id={idx} img={elem.img} tag = {elem.tag}/>
     })}
    </div>
  )
}

export default RightContent
