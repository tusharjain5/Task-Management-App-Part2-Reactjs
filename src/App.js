import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/header/Header";
import NewTask from "./Components/tasks/NewTask";
import WorkingTask from "./Components/tasks/WorkingTask";
import OldTask from "./Components/tasks/OldTask";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "http://localhost:8080/api";


function App() {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("new"); // ✅ Default active tab

  useEffect(() => {
    axios.get(`${API_URL}/tasks`) // ✅ Correct URL
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = (newTask) => {
    axios.post(`${API_URL}/tasks`, { ...newTask, status: "new" }) // ✅ Correct URL
      .then((response) => {
        setTasks([...tasks, response.data]);
        setActiveTab("working");
      })
      .catch((error) => console.error("Error adding task:", error));
  };
  


const deleteTask = (id) => {
  axios.delete(`${API_URL}/tasks/${id}`).then(() => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: "old" } : task
    ));
  }).catch((error) => console.error("Error deleting task:", error));
};


const updateTask = (id, updatedTask) => {
  axios.put(`${API_URL}/tasks/${id}`, updatedTask) // Send the updated task
    .then((response) => {
      setTasks(tasks.map((task) =>
        task.id === id ? response.data : task
      ));
    })
    .catch((error) => {
      console.error("Error updating task:", error);
      alert("Task update failed!");
    });
};



  return (
    <Router>
      <div className="container mt-3">
        <Header setActiveTab={setActiveTab} />

        <div className="task-section">
          {activeTab === "new" && <NewTask addTask={addTask} />}
          {activeTab === "working" && <WorkingTask tasks={tasks.filter(task => task.status !== 'old')} deleteTask={deleteTask} updateTask={updateTask} />}
          {activeTab === "old" && <OldTask tasks={tasks.filter(task => task.status === 'old')} />} {/* Filter old tasks */}
        </div>
      </div>
    </Router>
  );
}

export default App;
