import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroTextt from './HeroTextt'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  ' >
      <HeroTextt/>
      <Arrow/>
     
    </div>
  )
}

export default LeftContent
