import React from 'react'
import "../css/Taskform.css"

function TaskForm() {
  return (
    <main className="main-container">
    <section className="task-container">
        <form className="task-form">
            <input type="text" className="task-input" placeholder="Enter a new task" />
            <button id="task-button">Add Task</button>
        </form>
    </section>
    </main>
  )
}

export default TaskForm
