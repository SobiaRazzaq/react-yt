// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
// <div className="nav">
//   <h3>Sheryians</h3>

{
  /* without scroll with multiple pages  */
}
{
  /* <div> */
}
{
  /* this will create react based static website  */
}
{
  /* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
         <Link to="/product">Product</Link>
      </div> */
}

{
  /* when we use a this will reload the website */
}
{
  /* <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div> */
}
{
  /* </div>
  );
};

export default Navbar; */
}

// _________________________________________for SPA
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar ">
      <h3>Sheryians</h3>
    
      {/* without scroll with multiple pages  */}
      <div>
        {/* this will create react based static website  */}
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
