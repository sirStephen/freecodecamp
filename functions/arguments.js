// Multiple arguments
let add = function (a, b, c) {
	return a + b + c;
}

let result = add(10, 2, 9);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0){
	return `Name: ${name}\nScore: ${score}`;
}

let scoreText = getScoreText(undefined, 89);
console.log(scoreText);

// Tip calculator.... 
let getTip = function (bill, tipPercentage = 0.2, tip) {
	let percentage = tipPercentage * 100;
	let totalTip = bill * tipPercentage;

	return `A ${percentage}% tip on $${bill} would be $${totalTip}.`;
}

let tip = getTip(60);
console.log(tip);

// Template string
let name = 'Shola';
let careerPath = 'software developer';
console.log(`Hey, my name is ${name}! I am a ${careerPath}.`)