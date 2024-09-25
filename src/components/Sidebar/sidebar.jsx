import React from "react";
import Images from "../../utils/images";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <img src={Images.logo} alt="logo" />
      <ul className="sidebar__lists">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            style={location.pathname === "/" ? {} : { margin: "0 15px" }}
          >
            <i className="fa-solid fa-table"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            style={location.pathname === "/members" ? {} : { margin: "0 15px" }}
            to="/members"
            className={location.pathname === "/members" ? "active" : ""}
          >
            <i className="fas fa-chart-pie"></i>
            <span>All members</span>
          </Link>
        </li>
        <li>
          <Link
            style={location.pathname === "/tasks" ? {} : { margin: "0 15px" }}
            to="/tasks"
            className={location.pathname === "/tasks" ? "active" : ""}
          >
            <i className="fa-solid fa-clipboard-list"></i>
            <span>Tasks</span>
          </Link>
        </li>
        <li>
          <Link
            style={location.pathname === "/profile" ? {} : { margin: "0 15px" }}
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
          >
            <i className="fa-regular fa-address-card"></i>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
