function char_count(string) {
	const chars = {};

	for (let char of string)
		if (!chars[char]) chars[char] = 1;
		else chars[char]++;
	return chars;
}

function scramble(letters, word) {
	const chars = char_count(word);

	for (let char in chars) {
		let count;

		count = 0;
		for (let i = 0; i < letters.length; i++) {
			if (letters[i] === char) count++;
			if (count >= chars[char]) break;
			if (count < chars[char] && i === letters.length - 1)
				return false;
		}
	}
	return true;
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("kotas", "steak"));
