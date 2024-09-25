import React from "react";
import "./card.css";
import SecRectangle from "../UserRectangle/rectangle";

const FirstCard = () => {
  const secInfo = [
    {
      id: 0,
      friendName: "John Ekeler",
      number: "6",
    },
    {
      id: 1,
      friendName: "John Ekeler",
      number: "5",
    },
    {
      id: 2,
      friendName: "John Ekeler",
      number: "4",
    },
    {
      id: 3,
      friendName: "John Ekeler",
      number: "3",
    },
    {
      id: 4,
      friendName: "John Ekeler",
      number: "2",
    },
    {
      id: 5,
      friendName: "John Ekeler",
      number: "2",
    },
  ];

  return (
    <div className="card">
      <div className="card__content">
        <h2>Top rated friends</h2>
        <p>Done tasks</p>
      </div>
      {secInfo.map((item) => {
        return <SecRectangle key={item.id} secInfo={item} />;
      })}
    </div>
  );
};

export default FirstCard;
