function expandedForm(number) {
	return String(number)
		.split("")
		.map((digit, index, array) =>
			String(
				Number(digit) *
					Math.pow(10, array.length - 1 - index)
			)
		)
		.filter((n) => Number(n))
		.join(" + ");
}

console.log(expandedForm(123));
console.log(expandedForm(1042));
console.log(expandedForm(4));

//time: 03mins, 55secs
