import React from "react";
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/profile";
import Tasks from "./pages/Task/task";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Members from "./pages/Members/members";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </>
  );
};

export default App;
