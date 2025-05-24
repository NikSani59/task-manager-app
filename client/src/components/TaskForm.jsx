import { useState, useEffect, use } from "react";
import { addTask, deleteTask, updateTask, getTasks } from "../services/api";
import "../css/Taskform.css";

function TaskForm({ refresh }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    await fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  };  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const trimmed = newTask.trim();
      if (!trimmed) throw new Error("Task cannot be empty");
      await addTask(trimmed);  // this now waits properly
      setNewTask("");
      fetchTasks(); // refresh UI
    } catch (err) {
      console.error("Error:", err);
      alert(err.message);
    }
  };

  const handleToggleComplete = (id) => {

  }
  
  const handleEditTask = (id) => {

  }

  return (
    <main className="main-container">
      <section className="task-container">
        <form onSubmit={handleSubmit} className="task-form">
          <input
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            className="task-input"
            placeholder="Enter a new task"
          />
          <button id="task-button">Add Task</button>
        </form>
        <div className="list-container">
          <ul className="task-list">
            {tasks && tasks.map((task) => (
              <li className="task-item" key={task._id}>
                <input
                  type="checkbox"
                  className="task-checkbox"
                  id={`task-checkbox-${task._id}`}
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task._id)}
                />
                <span id={`task-${task._id}`} className="task-text">
                  {task.name}
                </span>
                <button
                  type="button"
                  id={`editBtn-${task._id}`}
                  onClick={() => handleEditTask(task._id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  id={`deleteBtn-${task._id}`}
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default TaskForm;
