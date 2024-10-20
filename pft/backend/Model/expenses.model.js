const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
   amount:{
    type: Number,
    default: 0,
   },
   category: {
    type: String,
  },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})


const Expenses = mongoose.model("Expenses",expenseSchema)
module.exports = Expenses