import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import TodoApp from "../../components/Todo/todo";

const Task = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <TodoApp />
        </div>
      </div>
    </div>
  );
};

export default Task;
