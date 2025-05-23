import express from 'express';
import {createTask,
        updateTask,
        getTasks,
        deleteTask} 
from "../controllers/taskController.js";

const router = express.Router();

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Get all tasks
router.get('/', getTasks);

// Delete a task
router.delete('/:id', deleteTask);
    
// Export the router
export default router;