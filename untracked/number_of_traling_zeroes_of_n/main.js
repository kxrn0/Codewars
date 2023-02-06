function zeros(n) {
	let count;

	count = 0;
	for (let i = 5; i <= n; i *= 5) count += ~~(n / i);

	return count;
}

console.log(zeros(6));
console.log(zeros(12));
console.log(zeros(23));
console.log(zeros(30));
console.log(zeros(1000));
