// topic context api mean data centeralization (it can also apply through the redux) mean every or any component can access the same data and context api is used for mid size application(state management is used) , things required(  1) context 2)provider 3)useContext)

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";

// const App = () => {

//   const [Theme, setTheme] = useState('light')

//   return <div className="h-screen w-full bg-black text-white">
//     {/* <Navbar Theme ={Theme}  setTheme ={setTheme}/> */}

//     {/* for children based concept  */}
//      <Navbar Theme ={Theme}  setTheme ={setTheme}>
//       <h1>children based context api </h1>
//       <h3>this is Navbar</h3>
//      </Navbar>

//   </div>;
// };

// export default App;

//  _______________________________________Context api  1st method

// import React, { useState } from "react";
// import Navbar from "./components/Navbar";

// const App = () => {

//   const [Theme, setTheme] = useState('light')

//   return <div className="h-screen w-full bg-black text-white">
//     <Navbar Theme ={Theme}  setTheme ={setTheme}/>

//   </div>;
// };

// export default App;

//  _______________________________________Context api  2nd method

// import React from "react";
// import Navbar from "./components/Navbar";
// import Button from "./components/Button";

// const App = () => {

//   return (
//     <div className= 'h-screen bg-black text-white'>
//       <Navbar   />
//       <Button/>
//         <div className="p-10">
//         <h1>Welcome</h1>
//         <p>This content will also change theme.</p>
//       </div>
//     </div>
//   );
// };

// export default App;

// __________________________________________
import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
const App = () => {
  return (
    <div className="h-screen w-full bg-black text-white">
     
      <Navbar /> <Button />
    </div>
  );
};
export default App;
