 let myBook = {
 	title: '1984',
 	author: 'George Orwell',
 	pageCount: 326
 }

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

let profile = {
	name: 'Gregory',
	age: 23,
	location: 'Lagos,city'
}

	
let getProfile = function () {
	console.log(`${profile.name} is ${profile.age} and lives in ${profile.location}.`); 
	profile.age++;
	console.log(`${profile.name} is ${profile.age} and lives in ${profile.location}.`);
}

getProfile();

