//  _______________________________________Context api  1st method

// import React, { createContext } from 'react'

// // 1) creating context
// export const ThemeDataContext =createContext()

// const ThemeContext = (props) => {
//   return (
//     <div>

//         {/* 2) providing context  */}
//    < ThemeDataContext.Provider value='Sobia'>
//    {props.children}
//    </ThemeDataContext.Provider>
//     </div>
//   )
// }

// export default ThemeContext

//  _______________________________________Context api  2nd method

// import React, { createContext, useState } from "react";

// export const ThemeDataContext = createContext();

// const ThemeContext = (props) => {
//   const [Theme, setTheme] = useState("light");
// //    const [screenTheme, setScreenTheme] = useState("light");
//   return (
//     <div>
//       <ThemeDataContext.Provider value={[Theme, setTheme]}>
//         {props.children}
//       </ThemeDataContext.Provider>
//     </div>
//   );
// };

// export default ThemeContext;

import React, { createContext, useState } from "react";
export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
    const [Theme, setTheme] = useState("light");
  return (
    <div>
   
      <ThemeDataContext.Provider value={[Theme, setTheme]}>
       
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};
export default ThemeContext;
