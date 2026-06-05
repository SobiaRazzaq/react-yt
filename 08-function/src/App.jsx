// next topic hooks (special type of functions to perform different tasks
// useState --> manage the states of any tag or feature
// useReducer -->to manage the complex thing 
// useRef -->is used to select any DOM element 
// useEffect --> to manage the side or to manage the multiple things at the same time
// useContext -->to manage the things/context globally
// useMemo -->for optimization of things or to reduce rerendering
// useCallback -->this also for optimization
// )

import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";

const App = () => {
  // 1st way for function
  // function btnClicked() {
  //   console.log("hello");
  // }

  // function inputChanging(val){
  //   console.log(val)
  // }

  // const pageScrolling=()=>{
  //   console.log('page scrolling!!')
  // }
  //  const pageScrolling=(elem)=>{
  //   if(elem>0){
  //     console.log('page scrolling in downward at speed',elem) 
  //   }else{
  //      console.log('page scrolling in upward at speed ',elem) 
  //   }
    // console.log('page scrolling at speed',elem)
  // }

  function btnClicked(){
    console.log('Button is clicked ')
  }
  return (
    // <div className="flex justify-center item-center mt-20">
    //   {/* 1st way for function  */}
    //   {/* <button
    //     className="h-12 w-25 bg-gray-500 text-white rounded-full "
    //     onClick={btnClicked}
    //   >
    //     Click here
    //   </button> */}

    //   {/* 2nd  way for function -direct calling the function into the tag  */}
    //   {/* <button
    //     className="h-12 w-25 bg-red-500 text-white rounded-full "
    //     onClick={function(){
    //       console.log("button is clicked")
    //     }}
    //   >
    //     Click here
    //   </button> */}

    //   {/* <input onChange={(elem)=>{
    //     console.log(elem.target.value)
    //   }} className="p-2 m-1 border-2 rounded-xl bg-amber-600 text-white " type="text" name="" id="" placeholder="enter name"/>
    //  */}
    //   {/* <input onChange={function(elem){
    //   inputChanging(elem.target.value)
    //  }} className="p-2 m-1 border-2 rounded-xl bg-amber-600 text-white " type="text" name="" id="" placeholder="enter name"/>
    //  */}

    //   {/* <div
    //     onMouseMove={(elem) => {
    //       console.log(elem.clientX, elem.clientY);
    //     }}
    //     className="box h-[200px] w-[200px] bg-black"
    //   ></div> */}

    // {/* </div> */}
    
      // <div  onWheel={(elem)=>{
      //   // console.log(elem.deltaY)

      //   pageScrolling(elem.deltaY)
      // }}>
      //   <div className="page1 "></div>
      //   <div className="page2 "></div>
      //   <div className="page3 "></div>
      //   <div className="page4 "></div>
      // </div>

      <div>
        <button onClick={btnClicked}>Click me</button>
      </div>
  );
};

export default App;
