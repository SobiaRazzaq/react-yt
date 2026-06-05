// website design architecture are of two types feature based(with multiple component of each feature) or atomic (one component made then used at multiple places)

import React from "react";
import Section1 from "./components/Section1/Section1.jsx";
import Section2 from "./components/Section2/Section2.jsx";
const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "blue",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "lightseagreen",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "brown",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://media.istockphoto.com/id/2245492646/photo/successful-businesswoman-smiling-walking-in-modern-office-hallway.jpg?s=1024x1024&w=is&k=20&c=u-JeriD5toPz6y7Hvl2p90syelTMK2Qxp28IiFn8g2g=",
      color: "pink",
      intro: "",
      tag: "Underoffice",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661775762217-eca44636f21c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "black",
      intro: "",
      tag: "BussinessWomen",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
