const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({},{})



export const Income = mongoose.Model("Income", incomeSchema)