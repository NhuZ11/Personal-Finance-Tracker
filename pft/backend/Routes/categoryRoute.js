const express = require("express");
const Category = require('../Model/category.model');
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  '/add-category',
  // Validate that 'name' field exists in request body
  body("name").notEmpty().withMessage("Category name is required"),
  async (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "Failed", errors: errors.array() });
    }

    const category = new Category(req.body);
    try {
      await category.save();
      res.status(201).json({
        status: 'Success',
        data: { category }
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        message: err.message  // Send only the error message
      });
    }
  }
);

module.exports = router;
