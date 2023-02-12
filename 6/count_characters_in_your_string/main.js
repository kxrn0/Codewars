function count(string) {
	const chars = {};

	for (let char of string)
		if (chars[char]) chars[char]++;
		else chars[char] = 1;
	return chars;
}

//time: 01mins, 25secs
