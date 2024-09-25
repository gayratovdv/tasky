import React from "react";
import "./card.css";
import Rectangle from "../Rectangle/rectangle";

const FirstCard = () => {
  const cardInfo = [
    {
      id: 0,
      name: "Creating Wireframe",
      icon: <i className="fa-regular fa-folder"></i>,
    },
    {
      id: 1,
      name: "Creating Wireframe",
      icon: <i className="fa-regular fa-folder"></i>,
    },
    {
      id: 2,
      name: "Creating Wireframe",
      icon: <i className="fa-regular fa-folder"></i>,
    },
    {
      id: 3,
      name: "Creating Wireframe",
      icon: <i className="fa-regular fa-folder"></i>,
    },
    {
      id: 4,
      name: "Creating Wireframe",
      icon: <i className="fa-regular fa-folder"></i>,
    },
    {
      id: 5,
      name: "Creating Wireframe",
      icon: <i className="fa-regular fa-folder"></i>,
    },
  ];

  return (
    <div className="card">
      <div className="card__content">
        <h2>Tasks for today</h2>
      </div>
      {cardInfo.map((item) => {
        return <Rectangle key={item.id} cardInfo={item} />;
      })}
    </div>
  );
};

export default FirstCard;
