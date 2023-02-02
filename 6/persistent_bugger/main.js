function persistence(number) {
	let count;

	count = 0;
	while (number > 9) {
		number = String(number)
			.split("")
			.map((char) => Number(char))
			.reduce((prod, current) => prod * current, 1);
		count++;
	}
	return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));

//time: 3mins, 54secs
