import React from "react";

const Navbar = (props) => {

    function changeTheme(){
          props.settheme("Dark");
    }

  return (
    <div>
      <p>{props.theme}</p>
      <p>{props.settheme}</p>
      <button
        onClick={changeTheme}
        className="bg-gray-500 py-2 px-5 mt-9 ml-20  rounded "
      >
        Change theme
      </button>
    </div>
  );
};

export default Navbar;
