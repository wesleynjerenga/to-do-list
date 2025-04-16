import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        backgroundColor: "blueviolet",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          style={{
            padding: "8px",
            width: "70%",
            marginRight: "10px",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 15px",
            borderRadius: "4px",
            backgroundColor: "white",
            color: "blueviolet",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              margin: "5px 0",
              background: "white",
              color: "blueviolet",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            {t}
            <button
              onClick={() => removeTask(index)}
              style={{
                background: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
