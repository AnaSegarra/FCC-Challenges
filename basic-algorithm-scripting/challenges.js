/* ==================================== */

// Convert Celsius to Fahrenheit
function convertToF(celsius) {
	return celsius * 9 / 5 + 32;
}

/* ==================================== */

// Reverse a string
function reverseString(str) {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

/* ==================================== */

// Factorialize a Number
function factorialize(num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

/* ==================================== */

// Find the Longest Word in a String
function findLongestWordLength(str) {
	let longestWord = '';
	str
		.split(' ')
		.forEach(word => (word.length > longestWord.length ? (longestWord = word) : (longestWord = longestWord)));
	return longestWord.length;
}

/* ==================================== */
