const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
  expense: {
    type: String,
  },
  userId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  } 
})

module.exports = mongoose.model('Expense', ExpenseSchema)