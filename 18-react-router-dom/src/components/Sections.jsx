// _________________________________________for SPA


import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";

const Sections = () => {
  return (
    <div className="section-main-div" >
      <section id="home">
        <Home />
      </section>


      <section id="about">
        <About />
      </section>

      <section id="product">
        <Product />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Sections;
