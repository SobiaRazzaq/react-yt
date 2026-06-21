// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import { Routes, Route } from "react-router-dom";
// import NoFound from "./pages/NoFound";
// import Women from "./pages/Women";
// import Men from "./pages/Men";
// import Kids from "./pages/Kids";

// const App = () => {
//   return (
//     <div className="h-screen bg-black text-white">
//       <Navbar />

//       {/* nested route  */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />

        
//         <Route path="/product" element={<Product />}>
//           <Route path="men" element={<Men />} />
//           <Route path="women" element={<Women />} />
//           <Route path="kids" element={<Kids />} />
//         </Route>

//         <Route path="*" element={<NoFound />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default App;





// for Dynamic Routing 
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import NoFound from "./pages/NoFound";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2/>

      {/* nested route  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route path="/courses" element={<Courses />} />
        {/* way for dynamic Routing */}
        <Route path="/courses/:Id" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NoFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
