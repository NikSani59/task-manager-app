import express from 'express';
import path from 'path';
import tasks from './routes/tasks.js';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// ENVIRONMENT VARIABLES
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

const app = express();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect the frontend to the backend
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/tasks', tasks);

// connect server to the database (mongoDB)
mongoose.connect(mongoURI).then(() => {
  console.log('MongoDB connected successfully');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
})

