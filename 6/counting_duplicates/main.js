function duplicateCount(string) {
	const keys = {};
	let sum;

	string = string.toLowerCase();

	for (let char of string)
		if (keys[char] === undefined) keys[char] = 0;
		else keys[char]++;

	sum = 0;
	for (let key in keys) if (keys[key] >= 1) sum++;
	return sum;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));

//time: 12mins, 27secs
