const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ["Need", "Want"],
    required: function () {
      return this.category === "Expense"; // Make type required for Expense category
    },
    default: null, // Default value for non-expense categories
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
