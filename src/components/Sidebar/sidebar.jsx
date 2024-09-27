import React from "react";
import "./sidebar.css";
import Images from "../../utils/images";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <img src={Images.sidebarHeadImage} alt="Head Image1" />
      </div>
      <ul className="sidebar__list">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === "/members" ? "active" : ""}>
          <Link to="/members">All Members</Link>
        </li>
        <li className={location.pathname === "/tasks" ? "active" : ""}>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
