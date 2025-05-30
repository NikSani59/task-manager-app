import mongoose from "mongoose";

// Define the schema for the task model
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

// creating a variable for the task model
const Task = mongoose.model("Task", taskSchema);

export default Task;