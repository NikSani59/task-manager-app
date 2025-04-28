const express = require('express');
const app = express();
const path = require('path');
const tasks = require('./routes/tasks');

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/tasks', tasks);

// server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
