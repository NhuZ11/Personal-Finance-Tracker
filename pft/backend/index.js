const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 8000;
const dbConnect = require("./db");
var cors = require('cors')  //for cross origin resource sharing


app.use(cors()) //using cors

//for database connection
dbConnect()
  .then(() => {
    app.listen(
      (PORT || 8000,
      () => {
        console.log("Server is running on port ", PORT);
      })
    );
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });



// Middleware for parsing JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Node.js Backend!");
});
// for authorization basic routes/middleware
app.use('/api/auth', require('./Routes/auth.js'))

app.use('/api/auth', require('./Routes/route.js'))

app.use('/api/auth', require('./Routes/categoryRoute.js'))


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
