import React, { useState, useEffect } from "react";
import "./todo.css";

const ProccesCard = ({ tasks, setTasks, setCompletedTasks }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTasks([...tasks, { task: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDelete = (indexToRemove) => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    const [completedTask] = updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setCompletedTasks((prevCompleted) => [
      ...prevCompleted,
      completedTask.task,
    ]);
  };

  return (
    <div className="procces-card">
      <h2>In Process</h2>
      <div className="procces-card__input">
        <input
          type="text"
          placeholder="Write the task’s title here to add and press enter button....."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="procces-card__tasks">
        {tasks.map((task, index) => (
          <div
            style={{ marginTop: "20px" }}
            key={index}
            className="task-rectangle"
          >
            <div className="task-rectangle__content">
              <div className="task-rectangle__content--wrapper">
                <i className="rectangle__icon fa-regular fa-folder"></i>
                <h4 className="task-rectangle__content-text">{task.task}</h4>
              </div>
              <div className="task-rectangle__content--wrapper">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={() => handleCheckboxChange(index)}
                />
                <i
                  onClick={() => handleDelete(index)}
                  className="fa-solid fa-trash delete-button"
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompletedCard = ({ completedTasks, setTasks, setCompletedTasks }) => {
  const handleCheckboxChange = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    const [taskToMoveBack] = updatedCompletedTasks.splice(index, 1);
    setCompletedTasks(updatedCompletedTasks);
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: taskToMoveBack, completed: false },
    ]);
  };

  return (
    <div style={{ marginTop: "40px" }} className="procces-card">
      <h2>Completed Tasks</h2>
      <div className="completed-card__tasks">
        {completedTasks.map((task, index) => (
          <div
            style={{ marginTop: "20px" }}
            key={index}
            className="task-rectangle"
          >
            <div className="task-rectangle__content">
              <div className="task-rectangle__content--wrapper">
                <i className="rectangle__icon fa-regular fa-folder"></i>
                <h4 className="task-rectangle__content-text">{task}</h4>
              </div>
              <div className="task-rectangle__content--wrapper">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={true}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasks");
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  return (
    <div className="todo-app">
      <ProccesCard
        tasks={tasks}
        setTasks={setTasks}
        setCompletedTasks={setCompletedTasks}
      />
      <CompletedCard
        completedTasks={completedTasks}
        setTasks={setTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
  );
};

export default TodoApp;
