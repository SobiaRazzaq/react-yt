import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 items-center bg-cyan-900 justify-between">
      <h2 className="text-2xl font-bold">Sobia</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to="/">
        
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
      
          About
        </Link>
          <Link className="text-lg font-medium" to="/courses">
          
          Courses
        </Link>
        <Link className="text-lg font-medium" to="/product">
         
          Product
        </Link>
        {/* <Link className="text-lg font-medium" to="/contact">
         
          Contact
        </Link> */}
      

        {/* this will reload the page so we use link tag to avoid it  */}
        {/* <a className="text-lg font-medium" href="/">
          Home
        </a>
        <a className="text-lg font-medium" href="/about">
          About
        </a>
          <a className="text-lg font-medium" href="/contact">
         Product
        </a>
        <a className="text-lg font-medium" href="/contact">
          Contact
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
