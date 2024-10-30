
const addTransactionButton = document.getElementById('addTransaction');

const allButton = document.getElementById('all');
const incomeButton = document.getElementById('income');
const expenceButton = document.getElementById('expense');

const inputDescription = document.getElementById('description');
const inputAmount = document.getElementById('amount');

const transactionList = document.querySelector('.transaction-list');
const totalBalance = document.getElementById('totalBalance');

let transactions = [];

addTransactionButton.addEventListener('click', buttonClickHandler);

function buttonClickHandler () {
    const newTransaction = document.createElement('li');
    newTransaction.classList.add('list-item');
    
}
 


