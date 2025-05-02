// In-memory task storage
const tasks = [];

// @desc  Create a new task
// @route POST /tasks
export const createTask = (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task cannot be empty' });
    }
    tasks.push(task);
    res.status(201).json({ message: 'Task created successfully' });
}

// @desc  Update a task
// @route PUT /tasks/:index
export const updateTask = (req, res) => {
    const index = req.params.index;
    const { task } = req.body;
    if (!tasks[index]) {
        return res.status(404).json({ error: 'Task not found' });
    }
    if (!task) {
        return res.status(400).json({ error: 'Task cannot be empty' });
    }
    tasks[index] = task;
    res.status(200).json({ message: 'Task updated successfully' });
}

// @desc  Get all tasks
// @route GET /tasks
export const getTasks = (req, res) => {
    res.status(200).json(tasks);
}

// @desc  Delete a task
// @route DELETE /tasks/:index
export const deleteTask = (req, res) => {
    const index = req.params.index;
    if (!tasks[index]) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
}