const express = require("express");
const User = require("../Model/user.model");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.SECRET;

const { body, validationResult } = require("express-validator");

//for all user
const authenticateUser = require("../Middleware/authenticateUser");
router.get("/getalluser", authenticateUser, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error")
  }
});


//for single user

router.get("/getuser", authenticateUser, async (req, res) => {
  try {
    const users = await User.findById(req.user.id);
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error")
  }
});



module.exports = router;
