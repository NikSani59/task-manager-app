import Task from '../models/taskModel.js';

// @desc  Create a new task
// @route POST /tasks
export const createTask = async (req, res) => {
    try{
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Task cannot be empty' });
        }
        const task =  await Task.create({ name });
        res.status(201).json({ message: 'Task created successfully' });
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
}

// @desc  Get all tasks
// @route GET /tasks
export const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
}

// @desc  Update a task
// @route PUT /tasks/:id
export const updateTask = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, completed } = req.body;

        const task = await Task.findByIdAndUpdate(
            id, 
            { name, completed }, 
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
          }
      
        res.status(200).json(task);
    } 
    catch(err) {
        res.status(500).json({ error: err.message });
    }
}

// @desc  Delete a task
// @route DELETE /tasks/:id
export const deleteTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
}