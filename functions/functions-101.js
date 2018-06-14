// function - input, code, output

let greetUser = function () {
	console.log('Welcome user!');
}

greetUser();

let square = function (num) {
	let result = num * num;
	return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

let convertFahrenheitToCelsius = function (fahrenheit) {
	let celsius = (fahrenheit - 32) / 1.8000;
	return celsius;
}
let callFahrenheitToCelsius = convertFahrenheitToCelsius(68);

console.log(callFahrenheitToCelsius);
