function toCamelCase(str) {
	return str
		.split(/[-_]/)
		.map((word, index) =>
			index
				? word[0].toUpperCase().concat(word.slice(1))
				: word
		)
		.join("");
}

console.log(toCamelCase("the-stealth-warrior"))

//time: 5mins, 07secs
