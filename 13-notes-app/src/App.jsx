import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    // console.log(copyTask)
    // console.log(title);
    // console.log(details);

    setTitle("");
    setDetails("");
  };

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
    // console.log(task)

  }




  return (
    <div className=" main-div lg:flex lg:h-screen   h-full bg-black  text-white  ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  items-start gap-4 p-10 flex-col lg:w-1/2 "
      >
        <h1 className="lg:flex text-3xl  font-bold">Add Notes</h1>
        <div className="flex items-start w-full   gap-4 flex-col">
          {/* first input or heading title here */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Notes Heading"
            className="e-heading px-5 text-sm font-medium w-full outline-none   border-2 rounded line-clamp-2 "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/*  detailed input here*/}
          <textarea
            className="e-details px-5 text-sm font-medium  w-full  h-32 outline-none  py-2 border-2 rounded line-clamp-2"
            type="text"
            name=""
            id=""
            placeholder="Write Details"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button className="bg-white active:bg-black w-full outline-none  text-black  px-5 py-2 font-medium  rounded ">
            Add Notes
          </button>
        </div>

        {/* <img
          className=" rotate-y-180   h-52"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        /> */}
      </form>

      <div className="card-div lg:w-1/2    lg:border-l-2 lg:p-l-17 p-10 ">
        <h1 className="text-3xl  font-bold">Recent Notes</h1>
        <div className="container  flex  overflow-auto flex-wrap items-start justify-start gap-5 h-[90%]   mt-5 mb-20 ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="cards flex justify-between flex-col items-start h-52 relative w-40 rounded-2xl bg-cover py-6 px-4 pb-5 text-black bg-[url('https://static.vecteezy.com/system/resources/thumbnails/000/153/300/small/grunge-style-note-paper-background.jpg')]"
              >
                {/* <h2 className="cross absolute  "><X /></h2> */}
                <div>
                  <h3 className="heading leading-tight text-lg overflow-auto  flex flex-wrap font-bold text-black text-wrap  line-clamp-3  ">
                    {elem.title}
                  </h3>
                  <p className="c-para mt-4  overflow-auto  flex flex-wrap leading-tight text-gray-700 font-normal text-sm  font-semibold line-clamp-3  ">
                    {elem.details}
                  </p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)

                }} className="w-full cursor-pointer active:scale-95 bg-red-500  text-white py-1 text-xs rounded font-bold">Delete</button>
              </div>
            );
          })}
          {/* <div className=" h-52 w-40 rounded-2xl bg-white"></div>
          <div className=" h-52 w-40 rounded-2xl bg-white"></div>
          <div className=" h-52 w-40 rounded-2xl bg-white"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
