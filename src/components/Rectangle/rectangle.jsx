import React from "react";
import "./rectangle.css";

const Rectangle = (props) => {
  return (
    <div className="rectangle">
      <i className="rectangle__icon">{props?.cardInfo?.icon}</i>
      <p>{props?.cardInfo?.name}</p>
    </div>
  );
};

export default Rectangle;
