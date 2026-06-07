import React, { useEffect, useState } from "react";
import axios from "axios"; //to access data from/of api
import Card from "./components/Card";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);
  // to post any data we use software postman(software)  and patch is used to update data
  const getData = async () => {
    const response = await axios.get(
      //template literals
      ` https://picsum.photos/v2/list?page=${index}&limit=100`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold" > Loading...</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      // we want that this code work without clicking button so we use useEffect hook for this fuctionality
      return (
        <div kek={idx} className="">
        <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    // <div className="overflow-auto bg-black h-screen p-4 text-white  ">
    <div className="bg-black min-h-screen p-4 text-white">
      {/* <h1>App</h1> */}
      {/* <button
        onClick={getData}
        className="bg-green-600 active:scale-95 mb-3 m-4 px-5 py-2 rounded"
      >
        Get Data
      </button> */}
      {/* <h1 className="fixed text-6xl">{index}</h1> */}
      {/* <div className="flex h-[82%]   flex-wrap p-2 gap-4"> */}
        <div className="flex flex-wrap p-2 gap-4">
        {printUserData}</div>
      <div className="flex lg:mt-5 justify-center gap-6 items-center p-4 ">
        <button
        style={{opacity:index==1?0.5:1}}
      //  disabled='true'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([])
            }
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
             setUserData([])
           
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
App;
