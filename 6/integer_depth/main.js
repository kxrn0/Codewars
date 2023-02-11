function computeDepth(n) {
	const digits = new Array(10).fill(null);
	let count;

	count = 1;
	while (digits.some((digit) => !digit)) {
		String(n * count)
			.split("")
			.forEach(
				(d) =>
					(digits[d] = digits[d]
						? digits[d] + 1
						: 1)
			);

		count++;
	}
	return count - 1;
}

console.log(computeDepth(42));
console.log(computeDepth(1));

//time: 09mins, 28secs
