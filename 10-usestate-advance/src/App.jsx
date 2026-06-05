import React from 'react'
import { useState } from 'react'

const App = () => {
  // const [num, setnum] = useState(10)
  // const [user, setuser] = useState({name:"sobia", age:20})
  // const [arr, setarr] = useState([10,34,87,98])

  // for batch update
  const [num, setNum] = useState(10)

  // js work in two manner 1) synchrounous(with proper order) 2) asynchronous(without proper order)
  const btnClicked=()=>{
    // asynchronous function means wothout proper order
    // setnum(num+5)
    // setuser({
    //   name:"Noor",
    //   age:23
    // })
    // setnum(20)

    // or as
    // to change the variable stored in array or object 
    // const newUser ={...user};
    // newUser.name='Aman'
    // newUser.age=40
    // console.log(newUser)
    // setuser(newUser)

    // console.log(arr)
    // const newArr = [...arr]   //to refer above array in new array
    // newArr.push(99)
    // console.log(newArr)
    // setarr(newArr)
    // or other way 
    // setuser(prev=>({...prev,age:50}))

    // for batch update
    // setNum(num+1)  //this will not work well so we do the work as done below
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))

  }
  return (
    <div>
        {/* <h2>{num}</h2> */}
        {/* <h2>{arr[0]}</h2> */}
        {/* <h2>{arr}</h2> */}
           {/* <h2>{user.name} {user.age}</h2> */}
      {/* <h2>{user.name}</h2>
      <h2>{user.age}</h2> */}
      {/* <h2>{user.name}</h2>
      <h2>{user.age}</h2> */}

      {/* for batch update */}
       <h2>{num}</h2>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
