const Expense = require('../models/Expense')


module.exports = {
    getExpenses: async (req,res)=>{
        console.log(req.user)
        try{
            const expenseItems = await Expense.find({userId:req.user.id})
            const itemsLeft = await Expense.countDocuments({userId:req.user.id,completed: false})
						const total = expenseItems.reduce((sum, expense)=> expense.amount+sum, 0)
						console.log({total})
            res.render('expenses.ejs', {expenses: expenseItems, left: itemsLeft, user: req.user, total})
        }catch(err){
            console.log(err)
        }
    },

    createExpense: async (req, res)=>{
        try{
            await Expense.create({expense: req.body.itemName, amount: req.body.itemAmount, completed: false, userId: req.user.id})
            console.log('Expense has been added!')
            res.redirect('/expenses')
        }catch(err){
            console.log(err)
        }
    },
    deleteExpense: async (req, res)=>{
        console.log(req.body.expenseIdFromJSFile)
        try{
            await Expense.findOneAndDelete({_id:req.body.expenseIdFromJSFile})
            console.log('Deleted Expense')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    
