import express from "express";
import path from "path";
import tasks from "./routes/tasks.js";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// ENVIRONMENT VARIABLES
const mongoURI = process.env.MONGO_URL;
const port = process.env.PORT || 3000;

// set up express
const app = express();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from the frontend
app.use(
  cors({
    origin: "localhost:5173", // Adjust this to your frontend's URL
  })
);

// routes
app.use("/tasks", tasks);

// connect server to the database (mongoDB)
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully", mongoURI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
