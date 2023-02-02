function uniqueInOrder(iterable) {
	const parsed = [];

	for (let char of iterable)
		if (char !== parsed[parsed.length - 1]) parsed.push(char);
	return parsed;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

//time: 6mins, 59secs
