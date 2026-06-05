import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = (props) => {
  return (
    <div className='pb-5 pt-5 flex items-center gap-10 h-[90vh]    px-18'>
      <LeftContent/>
      <RightContent  users={props.users}/>
    </div>
  )
}

export default Page1Content
