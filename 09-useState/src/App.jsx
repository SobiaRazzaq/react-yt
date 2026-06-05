// next topic hooks (special type of functions to perform different tasks
// useState --> manage the states of any tag or feature
// useReducer -->to manage the complex thing
// useRef -->is used to select any DOM element
// useEffect --> to manage the side or to manage the multiple things at the same time
// useContext -->to manage the things/context globally
// useMemo -->for optimization of things or to reduce rerendering
// useCallback -->this also for optimization
// )

import React from "react";
import { useState } from "react";

const App = () => {
  // let a = 20;
  // function changeA(){
  //   a = 30;
  // }

  // here the num is elem that is read only and setNum is elem that is write only
  // let [num, setNum] = useState(20);
  // const [username, setUsername] = useState('Sobia')

  // const [users, setusers] = useState([20, 90,88])
  // function changeNum() {
  //   setNum(30)
  //   setUsername('Ashi')
  //   setusers([10,20,30])

  // }

  let [num, setNum] = useState(0);
  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  return (
    <div>
      {/* here we can not change the value of a so we use useState hook in react  */}
      {/* <h1>Value of a is {a}</h1>
      <button onClick={changeA()}>Click</button> */}

      {/* <h1>Value of num is {num}</h1>
      <h1>Value of username is {username}</h1>
      <h1>Value of users is {users}</h1>
      <button onClick={changeNum}>Click</button> */}

      <div className="counterdiv">
        <h1 className="counter">{num}</h1>
        <div className="btndiv">
          <button onClick={increaseNum}>Increase</button>
          <button onClick={decreaseNum}>Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default App;
