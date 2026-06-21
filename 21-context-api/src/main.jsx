// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import ThemeContext from './context/ThemeContext.jsx'

// createRoot(document.getElementById('root')).render(
//     // for context api
//     // <ThemeContext>
//     //      <App />
//     // </ThemeContext>

//     // for now for children based concept
//       <App />

// )

//  _______________________________________Context api

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import ThemeContext from "./context/ThemeContext.jsx";

// createRoot(document.getElementById("root")).render(
//   // for context api
//   <ThemeContext>
//     <App />
//   </ThemeContext>,
// );



// for screen theme change 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContext from "./context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <App />
  </ThemeContext>
);