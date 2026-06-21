// font-family =Papyrus, fantasy for logo

// import React from 'react'
// import Nav2 from './Nav2'

// const Navbar = (props) => {
//     // console.log(props.children[0]); //just to print in console

//   return (
//     <div className='nav flex justify-between items-center  bg-teal-700 py-4 px-8'>
//       <h2 className='logo text-2xl font-extrabold  '>Sheryians</h2>
//      {/* to print on screen  */}
//      {/* children based context api  */}
//       {props.children[0]}
//       {props.children[1]}
//       <Nav2 Theme ={props.Theme}  setTheme ={props.setTheme}/>
//     </div>
//   )
// }

// export default Navbar

// _______________________________________Context api  1st method

// import React, { useContext } from 'react'
// import Nav2 from './Nav2'
// import { ThemeDataContext } from '../context/ThemeContext'

// const Navbar = (props) => {

//     //  3)using context
//   const data=  useContext(ThemeDataContext)

//   return (
//     <div className='nav flex justify-between items-center  bg-teal-700 py-4 px-8'>

//         {/* 3)using context  */}
//       <h2 className='logo text-2xl font-extrabold  '>{data}</h2>

//       <Nav2 Theme ={props.Theme}  setTheme ={props.setTheme}/>
//     </div>
//   )
// }

// export default Navbar

// _______________________________________Context api  2nd method

// import React, { useContext } from "react";
// import Nav2 from "./Nav2";
// import { ThemeDataContext } from "../context/ThemeContext";

// const Navbar = () => {

//   const [Theme] =  useContext(ThemeDataContext)
//   const [screenTheme] =  useContext(ThemeDataContext)
//   return (
//     <div className={Theme }>
//       <h2 className="logo text-2xl font-extrabold  ">Sheryians</h2>

//       <Nav2  className={screenTheme}/>
//     </div>
//   );
// };

// export default Navbar;

// ___________________________________________________________

import React, { useContext } from "react";
import Nav2 from "./Nav2.jsx";
import { ThemeDataContext } from "../context/ThemeContext";
const Navbar = () => {
  const [Theme,setTheme] = useContext(ThemeDataContext);
  return (
    <div className={Theme} >
      <h2 className="logo text-2xl font-extrabold ">Sheryians</h2>
      <Nav2   Theme={Theme} setTheme={setTheme}/>
    </div>
  );
};
export default Navbar;
