import React from "react";
import Images from "../../utils/images";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="navbar__left">
            <i className="fa-solid fa-bars"></i>
            <span>Dashboard</span>
          </div>
          <div className="navbar__right">
            <Link to="/profile">
              <span>Akbar Alikhonov</span>
            </Link>
            <Link to="/profile">
              <div className="navbar__right--avatar">
                <img src={Images.avatar} alt="avatar" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
