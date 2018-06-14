let myAccount = {
	name: 'Gregory Otiono',
	expenses: 0,
	income: 0
}

let otherAccount = myAccount;
otherAccount.income = 1000;

let addExpense = function (account, amount) {
	account.expenses = account.expenses + amount;
}

// to check if there is a property in an object
'income' in myAccount
myAccount.income !== undefined

// checking for all the properties in myAccount
for (var key in myAccount) {
	if (myAccount.hasOwnProperty(key)) {
		console.log(`${key}: ${myAccount[key]}`);	
	}	
}

addExpense(myAccount, 2.50);
console.log(myAccount);  

// MORE PRACTICE ON OBJECTS
var superman = {
	name: "Superman",
	"real name": "Clark Kent",
	height: 75,
	weight: 235,
	hero: true,
	villain: false,
	allies: ["Batman","Supergirl","Superboy"],
	fly: function(){
	return "Up, up and away!";
	}
}

// adding a properties
superman.city = 'Metropolis';
console.log(superman);

// changing properties
superman['real name'] = 'Kal-EL';
console.log(superman);

// removing properties
delete superman.fly
console.log(superman);

// nested objects
let justiceLeague = {
	superman: { realName: "Clarke Kent" },
	batman: { realName: "Bruce Wayne" },
	wonderWoman: { realName: "Diana Prince" },
	flash: { realName: "Barry Allen" },
	greenLantern: { realName: "Hal Jordan" },
	martianManhunter: { realName: "John Jones" }
}

console.log(justiceLeague);
// accessing the properies of justiceLeague
console.log(justiceLeague.wonderWoman.realName);
console.log(justiceLeague['flash']['realName']);
// mixing the notations to access the properties
console.log(justiceLeague.martianManhunter['realName']);
console.log(justiceLeague['greenLantern'].realName);

// Objects as Parameters to functions
function greet ({options}) {
	options = options || {};
	greeting = options.greeting || "Hello";
	name = options.name || "Anon";
	age = options.age || 18
	return greeting + "! My name is " + name + " and I am " + age +
	" years old.";
}

let greetMessage = greet();
console.log(greetMessage);