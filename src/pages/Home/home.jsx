import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import "./home.css";
import TaskCard from "../../components/TaskCard/taskcard";
import Card from "../../components/FirstCard/card";
import SecCard from "../../components/SecCard/card";

const Home = () => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const formattedYear = currentDate.getFullYear();

    setCurrentDateTime({
      date: formattedDate,
      month: monthName,
      year: formattedYear,
    });
  }, []);

  const data = [
    {
      id: 0,
      title: "Completed tasks",
      number: "3",
    },
    {
      id: 1,
      title: "Not started tasks",
      number: "5",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <h1>Today</h1>
          <p>
            {currentDateTime.month} {currentDateTime.date},{" "}
            {currentDateTime.year}
          </p>
          <div className="taskcards">
            {data.map((item) => (
              <TaskCard key={item.id} data={item} />
            ))}
          </div>
          <div className="cards">
            <Card />
            <SecCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
