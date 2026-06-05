// import React from "react";
// import { Star } from "lucide-react";

// const Card = (props) => {
//   return (
//     // <div className="cards-div">
//     <div className="card">
//       <div className="top">
//         <img src={props.productImage} alt="" />
//       </div>

//       <div className="bottom">
//         <div>
//           <h3>{props.productName}</h3>
//           <p>
//             {props.price} <span>{props.discount}</span>
//           </p>
//           <div className="rating">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 size={15}
//                 fill={star <= Math.round(props.rating) ? "gold" : "none"}
//                 color="gold"
//               />
//             ))}
//             <span id="review">({props.review})</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Card;


import React from "react";
import { Star } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.productImage} alt={props.productName} />
      </div>

      <div className="bottom">
        <div>
          <h3>{props.productName}</h3>

          <p>
            {props.price} <span>{props.discount}</span>
          </p>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                color="gold"
                fill={
                  star <= Math.floor(props.rating)
                    ? "#FFD700"
                    : "transparent"
                }
              />
            ))}

            <span id="review">
              ({props.review}) 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;