import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/dashboard";
import MembersPage from "./pages/Members/members";
import TasksPage from "./pages/Tasks/tasks";
import ProfilePage from "./pages/Profile/profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
