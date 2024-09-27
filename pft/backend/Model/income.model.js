const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({},{timestamps: true})



export const Income = mongoose.Model("Income", incomeSchema)