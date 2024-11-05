const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Expenses = require("../Model/expenses.model");
const Incomes = require("../Model/income.model")
const Savings = require("../Model/saving.model")
const authenticateUser = require("../Middleware/authenticateUser");
const Saving = require("../Model/saving.model");




// for expenses
router.post(
  "/add-expenses",
  authenticateUser,  // Middleware to authenticate the user
  body("category").notEmpty().withMessage("Category name is required"),
  body("amount").isNumeric().withMessage("Amount must be a number"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "Failed", errors: errors.array() });
    }

    try {
      // Create new expense with userId from req.user.id
      const expense = new Expenses({
        ...req.body,
        userId: req.user.id, // Assign the authenticated user's ID to the expense
      });

      await expense.save();

      res.status(201).json({
        status: "Success",
        data: { expense },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    }
  }
);




router.get("/get-expenses", authenticateUser, async (req, res) => {
    try {
      const expenses = await Expenses.find({ userId: req.user.id });
      res.status(200).json({
        status: "Success",
        data: { expenses },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    }
  });
  


//for income
router.post(
  "/add-incomes",
  authenticateUser,  // Middleware to authenticate the user
  body("category").notEmpty().withMessage("Category name is required"),
  body("amount").isNumeric().withMessage("Amount must be a number"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "Failed", errors: errors.array() });
    }

    try {
      // Create new expense with userId from req.user.id
      const income = new Incomes({
        ...req.body,
        userId: req.user.id, // Assign the authenticated user's ID to the expense
      });

      await income.save();

      res.status(201).json({
        status: "Success",
        data: { income },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    }
  }
);










//for savings

router.post(
  "/add-savings",
  authenticateUser,  // Middleware to authenticate the user
  body("category").notEmpty().withMessage("Category name is required"),
  body("amount").isNumeric().withMessage("Amount must be a number"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "Failed", errors: errors.array() });
    }

    try {
      // Create new expense with userId from req.user.id
      const saving = new Savings({
        ...req.body,
        userId: req.user.id, // Assign the authenticated user's ID to the expense
      });

      await saving.save();

      res.status(201).json({
        status: "Success",
        data: { saving },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err.message,
      });
    }
  }
);







module.exports = router;
