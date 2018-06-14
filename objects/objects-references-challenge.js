let myAcount = {
	name: 'Otiono Gregory',
	expenses: 0,
	income: 0
}

// add expenses
let addExpenses = function (account, amount) {
	account.expenses = account.expenses + amount
}

// add income
let addIncome = function (account, incomeAmount) {
	account.income = account.income + incomeAmount
}

// reset account
let resetAccount = function (account, resetAccount) {
	account.expenses = 0;
	account.income = 0; 
}

// get account summary
let getAccountSummary = function (account) {
	let balance = account.income - account.expenses
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addExpenses(myAcount, 250);
addIncome(myAcount, 2000);
addExpenses(myAcount, 150.30);
console.log(getAccountSummary(myAcount));
resetAccount(myAcount);
console.log(getAccountSummary(myAcount));
