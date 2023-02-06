function count(string, char) {
	return string
		.split("")
		.reduce((total, current) => total + (current === char), 0);
}

function firstNonRepeatingLetter(string) {
	const lowered = string.toLowerCase();

	for (let i = 0; i < string.length; i++) {
		const char = string[i].toLowerCase();

		if (count(lowered, char) === 1) return string[i];
	}
	return "";
}

//console.log(count("this is a string", "i"));

console.log(firstNonRepeatingLetter("sTreSS"));

//time: 09mins, 25mins
