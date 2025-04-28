const express = require('express');
const router = express.Router();

// In-memory task storage
const tasks = [];

// Create a new task
router.post('/', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task cannot be empty' });
    }
    tasks.push(task);
    res.status(201).json({ message: 'Task created successfully' });
});

// Get all tasks
router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

// Delete a task
router.delete('/:index', (req, res) => {
    const index = req.params.index;
    if (!tasks[index]) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
});
    
// Export the router
module.exports = router;