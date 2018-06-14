// A GRADE CALCULATOR
// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-90, C 70-79, D 60-69, F 0-59

let gradeScore = function (studentScore = 0, totalScore) {
	let percentage = 100;
	let studentPercentage = (studentScore/totalScore) * percentage;
	let grade = '';

	if (studentPercentage >= 90) {
		grade = 'A';
	} else if (studentPercentage >= 80) {
		grade = 'B';
	} else if (studentPercentage >= 70) {
		grade = 'C';
	}	else if (studentPercentage >= 60) {
		grade = 'D';
	} else {
		grade = 'F';
	}
	return `You got ${grade} (${studentPercentage}%)`;
}

let total = gradeScore(17, 20);
console.log(total);