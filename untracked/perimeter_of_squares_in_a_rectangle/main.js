function perimeter(n) {
	const fibs = [1, 1];

	if (!n)
		return 4;

	for (let i = 1; i < n; i++) {
		const temp = fibs[i];

		fibs.push(fibs[i] + fibs[i - 1]);
		fibs[i] = temp;
	}
	return 4 * fibs.reduce((total, current) => total + current, 0);
}

console.log(perimeter(0));
console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(20));
console.log(perimeter(30));
