function digPow(n, p) {
	const rs = String(n)
		.split("")
		.reduce(
			(total, current, index) =>
				total + Math.pow(current, p + index),
			0
		);
	if (!(rs % n)) return rs / n;
	return -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));

//time: 11mins, 37secs
