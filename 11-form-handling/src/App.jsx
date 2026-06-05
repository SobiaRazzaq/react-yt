import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted ");
  };
  return (
    <div>
      {/* form handling  */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="form-div"
        action=""
      >
        <h1>Student Form</h1>
        {/* two way binding next topic but for input mean when we enter the data in input we want to show it on console or to store it memory or print on the screen */}
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
        <p>hello</p>
      </form>
    </div>
  );
};

export default App;
