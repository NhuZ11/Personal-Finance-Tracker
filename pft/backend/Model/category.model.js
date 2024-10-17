const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Make it required if category name is essential
  },
  type: {
    type: String,
    enum: ['Income', 'Expense'],  // Allows only "Income" or "Expense"
    required: true,  // Ensure type is always provided
  },
  belongsTo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'type',  // Dynamic reference based on the 'type' field
  }
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
