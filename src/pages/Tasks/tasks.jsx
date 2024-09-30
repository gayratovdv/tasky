import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

// Styled Components
const Container = styled.div`
  display: flex;
`;

const Title = styled.h2`
  text-align: center;
  color: #a6b0ff;
  font-size: 24px;
  font-weight: bold;
`;

const ProccesCard = styled.div`
  width: 100%;
  border-radius: 34px;
  box-shadow: 0px 16px 31px 0px #00000003;
  background-color: #fff;
  padding: 47px;
`;

const Input = styled.input`
  width: 100%;
  padding: 35px;
  margin: 20px 0;
  border-radius: 20px;
  font-size: 16px;
  border: 1.43px solid #f1f1f1;
`;

const TaskList = styled.div`
  background-color: #fff;
  border-radius: 12px;
  border: 1.43px solid #f1f1f1;
  margin-top: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskTitle = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 20px;
  margin-right: 10px;
  color: #4f86ff;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff4f4f;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #ff1a1a;
  }
`;

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://simpletask.uz/task/in_process/"
      );
      setTasks(response.data); // Assuming the response contains an array of tasks
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error.response?.data || error.message
      );
    }
  };

  const addTask = async (e) => {
    if (e.key === "Enter" && input.trim()) {
      const newTask = { title: input, completed: false }; // Check the API requirement

      try {
        const response = await axios.post(
          "https://simpletask.uz/task/create/",
          newTask
        );
        const createdTask = response.data; // Get the response from the server
        setTasks((prevTasks) => [...prevTasks, createdTask]); // Add new task to the list
        setInput(""); // Clear the input
      } catch (error) {
        console.error(
          "Error adding task:",
          error.response?.data || error.message
        );
      }
    }
  };

  const toggleTaskCompletion = async (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };

    try {
      await axios.put(
        "https://simpletask.uz/task/update/", // Update endpoint
        updatedTask
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error(
        "Error updating task:",
        error.response?.data || error.message
      );
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://simpletask.uz/task/delete/?id=${id}`); // Ensure the query parameter is correct
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(
        "Error deleting task:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Container className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="content-main">
          <ProccesCard>
            <Title>In process</Title>
            <Input
              placeholder="Write the task's title here to add and press enter button......"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={addTask}
            />
            {tasks
              .filter((task) => !task.completed)
              .map((task) => (
                <TaskList key={task.id}>
                  <TaskTitle>
                    <Icon>📁</Icon> {task.title}
                  </TaskTitle>
                  <Buttons>
                    <FaCheckCircle
                      onClick={() => toggleTaskCompletion(task.id)}
                    />
                    <DeleteButton onClick={() => deleteTask(task.id)}>
                      🗑️
                    </DeleteButton>
                  </Buttons>
                </TaskList>
              ))}
          </ProccesCard>

          <ProccesCard style={{ marginTop: "50px" }}>
            <Title>Completed</Title>
            {tasks
              .filter((task) => task.completed)
              .map((task) => (
                <TaskList key={task.id}>
                  <TaskTitle>
                    <Icon>📁</Icon> {task.title}
                  </TaskTitle>
                  <Buttons>
                    <FaCheckCircle
                      onClick={() => toggleTaskCompletion(task.id)}
                    />
                    <DeleteButton onClick={() => deleteTask(task.id)}>
                      🗑️
                    </DeleteButton>
                  </Buttons>
                </TaskList>
              ))}
          </ProccesCard>
        </div>
      </div>
    </Container>
  );
};

export default TasksPage;
