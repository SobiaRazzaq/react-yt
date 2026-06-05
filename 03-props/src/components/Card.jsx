import React from 'react'


// // function without props 
// export const Cardpropsout = () => {
//   return (
//     <>
//     <div className='parent'>
//       <div className="card">
//        <img src="https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//       <h1>Mahnoor Rafique</h1>
//       <p>Lorem ipsum dolor sit amet   itaque.distinctio tempore.</p>
//       <button>View Profile</button>
//       </div>
//       </div>
//     </>
//   )
// }

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="" />
        {/* using props */}
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet   itaque.distinctio tempore.</p>
      <button>View Profile</button>
      </div>
    </>
  )
}

export default Card
