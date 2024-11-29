const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
   amount:{
    type: Number,
    default: 0,
    required: true,
    min: [0, "Cannot enter negative value"]
   },
   category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // type: {
  //   type: String,
  //   enum: ['Need', 'Want'],
  //   required: true
  // },
  userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      
    },
    date: { type: Date, required: true },
},{timestamps: true})


const Expenses = mongoose.model("Expenses",expenseSchema)
module.exports = Expenses