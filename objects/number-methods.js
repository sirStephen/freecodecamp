let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNum);

// challenge area - guessing game
let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);
let makeGuess = function (guess) {
	// if (guess === randomNumber) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	return guess === randomNumber;
}

console.log(makeGuess(4));