import React from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";

const TasksPage = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="content-main">Tasks</div>
      </div>
    </div>
  );
};

export default TasksPage;
