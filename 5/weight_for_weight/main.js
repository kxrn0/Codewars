function add_digits(number) {
	return String(number)
		.split("")
		.reduce((total, current) => total + Number(current), 0);
}

function orderWeight(weights) {
	weights = weights
		.split(" ")
		.map((w) => w.trim())
		.filter((w) => w);

	return weights
		.sort()
		.sort((a, b) => add_digits(a) - add_digits(b))
		.join(" ");
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

//time: 29mins, 00secs
