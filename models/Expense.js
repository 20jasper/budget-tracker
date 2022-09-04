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
	// amount is called cost in the other version, so some things may not work
})

module.exports = mongoose.model('Expense', ExpenseSchema)