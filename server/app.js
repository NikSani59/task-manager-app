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

// set up express
const app = express();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// routes
app.use('/tasks', tasks);

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


// connect server to the database (mongoDB)
mongoose.connect(mongoURI).then(() => {
  console.log('MongoDB connected successfully', mongoURI);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
})

