function rot13(message) {
	return message
		.split("")
		.map((c) => {
			const ch = c.charCodeAt(0);

			if ((97 > ch || ch > 122) && (65 > ch || ch > 90))
				return c;

			const code = c.toLowerCase().charCodeAt(0);
			const char = String.fromCharCode(
				((code - 84) % 26) + 97
			);

			return 97 <= ch && ch <= 122
				? char
				: char.toUpperCase();
		})
		.join("");
}

console.log(rot13("Test!"));
console.log(rot13("Zest..."));

//time: 35mins, 22secs
