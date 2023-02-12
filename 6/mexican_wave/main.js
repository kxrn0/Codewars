function wave(string) {
	const sentences = [];

	strings = string.split(" ");
	for (let i = 0; i < strings.length; i++) {
		for (let j = 0; j < strings[i].length; j++) {
			const waved = strings[i]
				.slice(0, j)
				.concat(strings[i][j].toUpperCase())
				.concat(strings[i].slice(j + 1));

			sentences.push(
				strings
					.slice(0, i)
					.concat([waved])
					.concat(strings.slice(i + 1))
					.join(" ")
			);
		}
	}
	return sentences;
}

console.log(wave("shalom"));
console.log(wave("this is a string"));
console.log(wave("by me"));

//time: 19mins, 53secs
