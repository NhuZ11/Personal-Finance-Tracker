const mongoose = require("mongoose");

const totalSchema = new mongoose.Schema(
  {
    totalExpenses: {
      type: Number,
      default: 0,
    },
    totalIncomes: {
      type: Number,
      default: 0,
    },
    totalSavings: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: { type: Date, required: true }
    // month: { type: Number, required: true }, // Store month (1-12)
    // year: { type: Number, required: true },  // Store year
  },
  { timestamps: true }
);

const Totals = mongoose.model("Total", totalSchema);
module.exports = Totals;
