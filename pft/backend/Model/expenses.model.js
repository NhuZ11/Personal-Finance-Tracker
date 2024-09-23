const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})


export const Expenses = mongoose.model("Expenses",expenseSchema)