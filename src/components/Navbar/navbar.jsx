import React from "react";
import Images from "../../utils/images";
import "./navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <h2>
              {location.pathname === "/" && "Dashboard"}
              {location.pathname === "/members" && "All Members"}
              {location.pathname === "/tasks" && "Tasks"}
              {location.pathname === "/profile" && "Profile"}
            </h2>
          </div>
          <div className="navbar__profile">
            <h3>Akbar Alihonov</h3>
            <img
              src={Images.navbarProfileLogo}
              alt="Profile Image1 in Navbar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
