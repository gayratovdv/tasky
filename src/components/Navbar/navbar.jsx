import React from "react";
import Images from "../../utils/images";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <img src={Images.navbarLogo} alt="Navbar Logo" />
            <h2>Dashboard</h2>
          </div>
          <div className="navbar__profile">
            <h3>Akbar Alihonov</h3>
            <img src={Images.navbarProfileLogo} alt="Profile Image1 in Navbar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
