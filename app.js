import express from 'express';
import path from 'path';
import tasks from './routes/tasks.js';
import { fileURLToPath } from 'url';

const app = express();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
express.urlencoded({ extended: true });

// connect the frontend to the backend
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/tasks', tasks);

// server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
