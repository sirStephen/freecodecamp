// Global scope (converFahrenheitToCelsius, tempOne, tempTwo)
	// Local scope (fahrenheit, celsius)
		// Local scope (isFreezing)
let convertFahrenheitToCelsius = function (fahrenheit) {
	let celsius = (fahrenheit - 32) / 1.8000;

	if (celsius <= 0) {
		let isFreezing = true;
	}

	return celsius;
}
let tempOne = convertFahrenheitToCelsius(68);
let tempTwo = convertFahrenheitToCelsius(32);

console.log(tempOne);
console.log(tempTwo);