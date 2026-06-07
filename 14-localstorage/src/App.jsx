// local Storage is storing the data on the browser
import React from 'react'

const App = () => {
  // to clear the local storage of the browser
  // localStorage.clear()
  // sessionStorage.clear()

  // to store data on local storage
  // localStorage.setItem('user','sarthak')

  //  to access data from local storage
  //  const user= localStorage.getItem('user')
  //  console.log(user);
   
  //  localStorage.setItem('age',20)
  //   const age= localStorage.getItem('age')
  //  console.log(age);

  //  to remove data from local storage
  // localStorage.removeItem('user')

  // to store array/object 
  // const user ={
  //   username:'Sobia',
  //   age:21,
  //   city:'Multan'
  // }
  // console.log(user)
  // we have to store object in string format 
  // localStorage.setItem('user',JSON.stringify(user))

  // to print we convert it into object 
  const user = JSON.parse(localStorage.getItem('user'))
   console.log((user));
  console.log(typeof(user));
  return (
    <div>
      App
    </div>
  )
}

export default App
