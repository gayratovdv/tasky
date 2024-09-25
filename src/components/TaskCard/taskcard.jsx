import React from "react";
import "./taskcard.css"

const TaskCard = (props) => {
  return (
    <div className="taskcard">
      <h3>{props?.data?.title}</h3>
      <div className="taskcard__wrapper">
        <h5>{props?.data?.number}</h5>
        <i className="fa-regular fa-folder"></i>
      </div>
    </div>
  );
};

export default TaskCard;
