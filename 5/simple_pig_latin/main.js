function pigIt(string) {
	return string
		.split(" ")
		.map((word) => {
			let letters;
			let punctuation;

			letters = word.match(/\w+/);
			punctuation = word.match(/[^a-z]/gi);

			if (letters) letters = letters[0];
			if (punctuation) punctuation = punctuation[0];

			return `${
				letters
					? `${letters.slice(1)}${letters[0]}ay`
					: ""
			}${punctuation ? punctuation[0] : ""}`;
		})
		.join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello World!"));
console.log(pigIt("Hello World !"));

//time: 18mins, 57secs
