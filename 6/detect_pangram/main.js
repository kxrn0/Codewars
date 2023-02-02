function isPangram(string) {
	string = string
		.toLowerCase()
		.split("")
		.filter(
			(char) =>
				97 <= char.charCodeAt(0) &&
				char.charCodeAt(0) <= 122
		);

	for (let i = 97; i < 122; i++)
		if (!string.some((char) => char.charCodeAt(0) === i))
			return false;
	return true;
}

//time: 4mins, 20secs
