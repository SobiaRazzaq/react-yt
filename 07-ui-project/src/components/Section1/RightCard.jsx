import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent.jsx";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-57 bg-red-500 rounded-4xl">
      <img className="h-full w-full object-cover " src={props.img} alt="" />
      <RightCardContent id={props.id} color={props.color} tag={props.tag} />
    </div>
  );
};

export default RightCard;
