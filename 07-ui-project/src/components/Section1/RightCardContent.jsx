import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between">
      <h2 className="bg-white text-md font-semibold rounded-full h-9 w-9 flex justify-center items-center">
       {props.id+1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-sm w-[90%]  leading-normal text-white mb-10">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, veritatis
          numquam ea odit labore sapiente.
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className="  font-medium px-5 text-white py-2 rounded-full">
          {props.tag}
          </button>
          <button style={{backgroundColor:props.color} }className=" font-medium px-3 text-white py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
