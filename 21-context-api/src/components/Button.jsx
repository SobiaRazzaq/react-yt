// import React, { useContext } from 'react'
// import { ThemeDataContext } from '../context/ThemeContext'

// const Button = () => {

//    const [Theme , setTheme] = useContext(ThemeDataContext)

//     const changeTheme =()=>{
//          setTheme(Theme === "light" ? "dark" : "light");

//     }
//   return (
//     <div>
//       <button className='bg-gray-500 rounded py-2 px-5 mt-5 ml-10' onClick={changeTheme}>Change Theme </button>
//     </div>
//   )
// }

// export default Button

import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
const Button = () => {
  const [Theme, setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    setTheme(Theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button className="rounded bg-gray-500 py-2 px-5 mt-10 ml-20" onClick={changeTheme}>Change Theme </button>
    </div>
  );
};
export default Button;
