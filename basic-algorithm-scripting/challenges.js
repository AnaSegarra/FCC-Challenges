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

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
	let arrMax = [];
	arr.forEach(array => arrMax.push(Math.max(...array.flat())));
	return arrMax;
}

/* ==================================== */

// Confirm the Ending
function confirmEnding(str, target) {
	return str.lastIndexOf(target) === str.length - target.length;
}

/* ==================================== */

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
	let result = '';
	if (num < 0) {
		return result;
	} else {
		for (let i = 0; i < num; i++) {
			result += str;
		}
	}
	return result;
}

/* ==================================== */

// Truncate a String
function truncateString(str, num) {
	return str.length > num ? str.slice(0, num) + '...' : str;
}
