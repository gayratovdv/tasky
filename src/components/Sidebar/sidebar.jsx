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
          <i
            style={
              location.pathname === "/"
                ? { margin: "0 10px 0 0", color: "white" }
                : {}
            }
            className="fa-solid fa-table"
          ></i>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === "/members" ? "active" : ""}>
          <i
            style={
              location.pathname === "/members"
                ? { margin: "0 10px 0 0", color: "white" }
                : {}
            }
            className="fas fa-chart-pie"
          ></i>
          <Link to="/members">All Members</Link>
        </li>
        <li className={location.pathname === "/tasks" ? "active" : ""}>
          <i
            style={
              location.pathname === "/tasks"
                ? { margin: "0 10px 0 0", color: "white" }
                : {}
            }
            className="fa-solid fa-clipboard-list"
          ></i>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <i
            style={
              location.pathname === "/profile"
                ? { margin: "0 10px 0 0", color: "white" }
                : {}
            }
            className="fa-regular fa-address-card"
          ></i>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
