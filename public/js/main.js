const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteExpense)
})

async function deleteExpense(){
    const expenseId = this.parentNode.dataset.id
    try{
        const response = await fetch('expenses/deleteExpense', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'expenseIdFromJSFile': expenseId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

let userBudget = Number(document.querySelector('.budgetAmount').innerHTML) //gets the value out of the h3 which is the users total budget
console.log(userBudget) //test to see if it works -- it does!
