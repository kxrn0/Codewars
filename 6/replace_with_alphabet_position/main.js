function alphabetPosition(string) {
	return string
		.toLowerCase()
		.split("")
		.map((letter) => letter.charCodeAt(0) - 96)
		.filter((code) => 1 <= code && code <= 26)
		.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//time: 11mins, 11secs
