function toWeirdCase(string) {
	return string
		.split(" ")
		.map((word) =>
			word
				.split("")
				.map((char, index) =>
					index % 2
						? char.toLowerCase()
						: char.toUpperCase()
				)
				.join("")
		)
		.join(" ");
}

console.log(toWeirdCase("Linux"))
console.log(toWeirdCase("free software"))

//time: 03mins, 10secs
