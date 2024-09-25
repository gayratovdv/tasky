import React from "react";
import "./secrectangle.css";
import Images from "../../utils/images";

const Rectangle = () => {
  return (
    <div className="rectangle">
      <img src={Images.avatar} alt="User Avatar" />
      <h2>John Doe</h2>
    </div>
  );
};

export default Rectangle;
