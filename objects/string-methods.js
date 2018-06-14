let name = ' Otiono Gregory ';

//length property
console.log(name.length);

// convert to upper case
console.log(name.toUpperCase());

// convert to lower case
console.log(name.toLowerCase());

// includes method
let password = 'abc123def567password';
console.log(password.includes('password'));

// trim
console.log(name.trim());

// challenge area
let isValidPassword = function (password) {
	// if (password.length > 8 && !password.includes('password')) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// simplifying the challenge area
	return password.length > 8 && !password.includes('password');

}

console.log(isValidPassword('aidubu'));
console.log(isValidPassword('abcde12345'))
console.log(isValidPassword('idbbupassword'))