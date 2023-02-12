function sumDigPow(a, b) {
	const numbers = [];

	for (let i = a; i <= b; i++) {
		const value = String(i)
			.split("")
			.reduce(
				(total, current, index) =>
					total +
					Math.pow(Number(current), index + 1),
				0
			);

		if (value === i) numbers.push(i);
	}
	return numbers;
}

console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));

//time: 08mins, 01secs
