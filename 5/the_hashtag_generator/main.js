function generateHashtag(string) {
	string = string
		.split(" ")
		.map((w) => w.trim())
		.filter((w) => w);

	if (!string.length) return false;

	const final = `#${string
		.map((w) => `${w[0].toUpperCase()}${w.slice(1)}`)
		.join("")}`;

	return final.length > 140 ? false : final;
}

console.log(generateHashtag("This is a string!"));

//time: 6mins, 58secs
