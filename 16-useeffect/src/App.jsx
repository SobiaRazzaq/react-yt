// useEffect(use when state change(called mounting),) hook is used to manage the multiple tasks /react rendering process eg parallely api call etc or Dom based manipulation

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  // const [num, setNum] = useState(0);
  // const [num2, setNum2] = useState(100);

  // 1st use is it is used  when state change(called mounting)
  // useEffect(function(){
  //   console.log('use effect is running... ');
  // })

  // 2nd use is  (compoent is mount but effect once) means not change everytime when the state is changed
  // useEffect(
  //   function () {
  //     console.log("use effect is running... ");
  //   },
  //   [num],
  // ); //[] is dependency array

  // function random (){
  //   const a = Math.random()
  //   console.log(a);

  // }
  // random()   //function calling

  //____________________________ Other Example

  const [a, setA] = useState(0);

  const [b, setB] = useState(0);
  // we want to run these function in side effect
  function aChanging() {
    console.log("a is changing");
  }
  function bChanging() {
    console.log("b is changing");
  }

  // useEffect(
  //   function () {
  //     aChanging();
  //     console.log("use effect is running...");
  //   },
  //   [a],
  // ); //change only when value of A changes

  useEffect(
    function () {
      bChanging();
      console.log("use effect is running...");
    },
    [b],
  ); //change only when value of B changes
  return (
    <div>
      {/* <h1>num is {num}</h1>
      <h1>num2 is {num2}</h1>
      <button
        // onClick={() => {
        //   setNum(num + 1);
        // }}
        // onDoubleClick={() => {
        //   setNum2(num2 + 10);
        // }}

        // or 
      //    onMouseEnter={() => {
      //     setNum(num + 1);
      //   }}
      //   onMouseLeave={() => {
      //     setNum2(num2 + 10);
      //   }}
      // >
      //   Hover
      // </button> */}

      {/* ____________________________ Other Example  */}
      <h1>A is {a} </h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
