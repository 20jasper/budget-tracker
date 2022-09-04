const express = require('express')
const router = express.Router()
const expensesController = require('../controllers/expenses.js') 
const budgetController = require('../controllers/budget.js')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, expensesController.getExpenses)

router.post('/createBudget', budgetController.createBudget)

router.post('/createExpense', expensesController.createExpense)

router.delete('/deleteExpense', expensesController.deleteExpense)

module.exports = router