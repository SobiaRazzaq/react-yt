// import React from "react";

// const Nav2 = (props) => {
//   return (
//     <div className="nav2 flex gap-5">
//       <h4>Home</h4>
//       <h4>About</h4>
//       <h4>Contact</h4>
//       <h4>Services</h4>
//      <h4> {props.Theme}</h4>
//     </div>
//   );
// };

// export default Nav2;

//  _______________________________________Context api  1st method

// import React from "react";

// const Nav2 = (props) => {
//   return (
//     <div className="nav2 flex gap-5">
//       <h4>Home</h4>
//       <h4>About</h4>
//       <h4>Contact</h4>
//       <h4>Services</h4>
//      <h4> {props.Theme}</h4>
//     </div>
//   );
// };

// export default Nav2;

//  _______________________________________Context api  2nd method

// import React, { useContext } from "react";
// import { ThemeDataContext } from "../context/ThemeContext";

// // const data = useContext(ThemeDataContext)

// const Nav2 = () => {
//     // we can restructure it as
//  const [Theme, setTheme] = useContext(ThemeDataContext)
//   return (
//     <div className="nav2 flex gap-5">
//       <h4>Home</h4>
//       <h4>About</h4>
//       <h4>Contact</h4>
//       <h4>Services</h4>
//      <h4>{Theme}</h4>
//     </div>
//   );
// };

// export default Nav2;

// _________________________________________________________

import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
// const data = useContext(ThemeDataContext);
// we can restructure it as

const Nav2 = () => {
  const [Theme] = useContext(ThemeDataContext);

  return (
    <div className="nav2 text-white flex gap-5">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{Theme}</h4>
    </div>
  );
};
export default Nav2;
