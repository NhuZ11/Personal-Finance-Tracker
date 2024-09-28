const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
