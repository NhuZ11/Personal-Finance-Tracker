const express = require('express');
require('dotenv').config()
const app = express();
const PORT = 8000
const dbConnect = require('./db')
dbConnect()
// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Node.js Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
