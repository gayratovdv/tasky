import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import SearchCard from "../../components/SearchCard/search";
import UsersCard from "../../components/UsersCard/users";
import "./members.css";

const Members = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <div className="members__content">
            <UsersCard/>
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
