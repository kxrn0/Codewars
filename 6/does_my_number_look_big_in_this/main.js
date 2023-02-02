function narcissistic(number) {
	return (
		String(number)
			.split("")
			.reduce(
				(total, current, _, a) =>
					total +
					Math.pow(Number(current), a.length),
				0
			) === number
	);
}

console.log(narcissistic(153));
console.log(narcissistic(1652));

//time: 4mins, 35secs
