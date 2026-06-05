import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted  by", title);
    setTitle("");
  };
  return (
    <div>
      {/* form handling  */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="form-div"
      >
        <h1>Student Form</h1>
        {/* two way binding is for input mean when we enter the data in input we want to show it on console or to store it memory or print on the screen */}
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
        <p>hello</p>
      </form>
    </div>
  );
};

export default App;
