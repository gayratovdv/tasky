import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import ProfileCard from "../../components/ProfileCard/profile";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
