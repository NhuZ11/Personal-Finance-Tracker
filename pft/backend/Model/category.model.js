const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Make it required if category name is essential
  },
  category: {
    type: String,
    enum: ['Income', 'Expense', 'Saving'],  // Allows only "Income" or "Expense"
    required: true,  // Ensure type is always provided
  },
  // belongsTo: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   refPath: 'type',  // Dynamic reference based on the 'type' field
  // },
  description : {
    type: String,
    required: true
  },
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
