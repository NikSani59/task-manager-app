import { useState, useEffect, use } from "react";
import { addTask, deleteTask, updateTask, getTasks } from "../services/api";
import TaskItem  from "./TaskItem";
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

  const handleDeleteTask = async (id) => {
    console.log("Deleting task with ID:", id);
    try {
      await deleteTask(id);
      fetchTasks(); // refresh UI
    } catch (err) {
      console.error("Error deleting task:", err);
      alert("Failed to delete task");
    }
  }
  
  const handleEditTask = async (id, newName) => {
  try {
    await updateTask(id, { name: newName });
    fetchTasks(); // refresh list
  } catch (err) {
    console.error("Error updating task:", err);
    alert("Failed to update task");
  }
};



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
          <button className="task-button">Add Task</button>
        </form>
        <div className="list-container">
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onToggle={async (id) => {
                  try {
                    await updateTask(id, { completed: !task.completed });
                    fetchTasks(); 
                  } catch (err) {
                    console.error("Error toggling task:", err);
                    alert("Failed to toggle task");
                  }
                }}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
              
          </ul>
        </div>
      </section>
    </main>
  );
}

export default TaskForm;
