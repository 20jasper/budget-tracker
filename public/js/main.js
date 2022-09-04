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
