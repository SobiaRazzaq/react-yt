import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
    // give the parameters of url 
  const  Params = useParams()
  console.log(Params);
  
  return (
    <div>
      <h1>{Params.Id} Course Details Page</h1>
    </div>
  );
};

export default CourseDetails;
