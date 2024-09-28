const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
   amount:{
    type: Number,
    default: 0,
   },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})


const Expenses = mongoose.model("Expenses",expenseSchema)
module.exports = Expenses