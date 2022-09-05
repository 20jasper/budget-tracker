const Budget = require('../models/Budget')
const User = require('../models/User')

module.exports = {


createBudget: async (req, res)=>{
    try{
        console.log('Try Branch')
        await Budget.create({budget: req.body.myBudget, userId:req.user.id, completed: false})
        console.log('Budget has been added!')
        res.redirect('/expenses')
    }catch(err){
        console.log('Error Branch')
        console.log(err)
    }
},

updateBudget: async (req, res) => {
	try{
		console.log('Try Branch')
		await User.findOneAndUpdate({_id: req.user,},{budget: req.body.myBudget})
		console.log('Budget has been added!')
		res.redirect('/expenses')
	}
	catch(err){
			console.log('Error Branch')
			console.log(err)
	}
}


}