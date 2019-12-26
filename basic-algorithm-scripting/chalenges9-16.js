/* ==================================== */

// Finders keepers
function findElement(arr, func) {
	let passFunc = [];
	arr.forEach(num => {
		if (func(num)) {
			passFunc.push(num);
		}
	});
	return passFunc[0];
}

/* ==================================== */

// Boo who
function booWho(bool) {
	return typeof bool === 'boolean';
}

/* ==================================== */

// Title case a sentence
function titleCase(str) {
	let arr = str.toLowerCase().split(' ').map(word => word[0].toUpperCase());

	let newSentence = str.toLowerCase().split(' ').map((word, index) => word.replace(word[0], arr[index]));
	return newSentence.join(' ');
}

/* ==================================== */

//  Slice and splice
function frankenSplice(arr1, arr2, n) {
	let copy = [ ...arr2 ].splice(n);
	let init = arr2.slice(0, n);
	let newArr = [ ...init, ...arr1, ...copy ];
	return newArr;
}

/* ==================================== */

//  Falsy bouncer
function bouncer(arr) {
	return arr.filter(item => (item ? true : false));
}

/* ==================================== */

// Where do I belong
function getIndexToIns(arr, num) {
	arr.push(num);
	let arrSorted = arr.sort((a, b) => a - b);
	return arrSorted.indexOf(num);
}

/* ==================================== */

// Mutations
function mutation(arr) {
	for (let i = 0; i < arr[1].length; i++) {
		if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
			return false;
		}
	}
	return true;
}

/* ==================================== */

// Chunky monkey
function chunkArrayInGroups(arr, size) {
	let newArr = [];
	for (let i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
}
