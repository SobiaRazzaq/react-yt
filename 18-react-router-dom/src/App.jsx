// import React from "react";
// import { Route, Routes } from "react-router-dom";

// // for multy page application
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";

// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div className="h-full ">
{
  /* <Navbar></Navbar> */
}
{
  /* 
      <Navbar /> */
}

{
  /* this is for multiy page application  */
}
{
  /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/product" element={<Product />} />
      </Routes> */
}
{
  /* <h2>This is a Footer</h2> */
}
{
  /* </div>
  );
};

export default App; */
}



// _________________________________________for SPA

import React from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/sections";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sections />
    </div>
  );
};

export default App;
