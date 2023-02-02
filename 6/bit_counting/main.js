function countBits(number) {
	let bits;

	bits = 0;
	while (number) {
		let xp;

		xp = 0;

		while (Math.pow(2, xp) <= number) xp++;
		xp--;
		number -= Math.pow(2, xp);
		bits++;
	}
	return bits;
}

console.log(countBits(1234));

//time: 33min, 25secs
