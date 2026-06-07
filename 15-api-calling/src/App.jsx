// APi is used to connect the front end with backend  using request(F to B) and response(B to F)
// we can get data by two method 1) fetch method 2) axios method

// website for data Api(https://jsonplaceholder.typicode.com/,https://picsum.photos/)

import React from "react";
import axios from "axios"; //manage the loading,errors,intercepters,easy setup,is third party library

const App = () => {
  // axios method
  //  const getData =async ()=>{
  // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //  console.log(response.data);

  //   }

  // or as to access data using de structuring
  //   const getData =async ()=>{
  // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //  console.log(data);

  //   }

  // or as
  const [mydata, setMyData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setMyData(response.data);
  };

  // fetch method
  // const getData = async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //    console.log(data);
  //   }
  // we use async function to  await to get respose
  //  async  function getData(){
  //     // js work as asynchronously when caling api other wise js is synchronous
  //     const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     console.log(response);

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {mydata.map(function(elem, idx) {
          return (
            <h3>
             {elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
