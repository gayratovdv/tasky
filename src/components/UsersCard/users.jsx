import React, { useState, useEffect } from "react";
import UserRectangle from "../UserRectangle/rectangle";
import "./users.css";

const UsersCard = () => {

  return (
    <div className="user-card">
      <div className="user-card__content">
        <h2>All friends</h2>
        <p>Done tasks</p>
      </div>
      <div className="user-card__cards">
            <UserRectangle />
      </div>
    </div>
  );
};

export default UsersCard;
