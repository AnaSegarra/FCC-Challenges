/* ==================================== */

// Sum all numbers in a range
function sumAll(arr) {
	arr.sort((a, b) => a - b);
	let sum = 0;
	for (let i = arr[0]; i <= arr[1]; i++) {
		sum += i;
	}
	return sum;
}

/* ==================================== */

// Diff two arrays
function diffArray(arr1, arr2) {
	let newArr = [];
	arr1.forEach(item => {
		if (!arr2.includes(item)) {
			newArr.push(item);
		}
	});
	arr2.forEach(item => {
		if (!arr1.includes(item)) {
			newArr.push(item);
		}
	});
	return newArr;
}

/* ==================================== */

// Seek and destroy
function destroyer(arr) {
	let args = Array.from(arguments).slice(1);
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!args.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

/* ==================================== */

// Wherefore art thou

/* ==================================== */

// Spinal tap case
function spinalCase(str) {
	return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}
