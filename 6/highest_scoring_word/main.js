function get_word_score(word) {
	return word
		.split("")
		.reduce((total, current) => total + current.charCodeAt(0) - 96, 0);
}

function high(words) {
	return words.split(" ").reduce(
		(highest, current) => {
			const currentScore = get_word_score(current);

			if (currentScore > highest.score)
				highest = {
					score: currentScore,
					word: current,
				};
			return highest;
		},
		{ score: 0, word: "" }
	).word;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("take me to semynak"));
console.log(high("what time are we climbing up the volcano"));

//time: 17mins, 14secs
