function isValidIP(ip) {
	const octets = String(ip).split(".");

	return (
		octets.length === 4 &&
		octets.every((octet) => {
			const number = Number(octet);

			return (
				octet.length === String(number).length &&
				0 <= number &&
				number <= 255
			);
		})
	);
}

console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("123.456.78.90"));

//time: 05mins, 34secs
