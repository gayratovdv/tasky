import React from "react";
import "./profile.css";
import Avatar from "../../assets/Group 54 (1).png"
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={Avatar} alt="avatar" />
      <h2>Akbar Alihonov</h2>
      <Link to={"/login"}><button>Log out</button></Link>
    </div>
  );
};

export default ProfileCard;
