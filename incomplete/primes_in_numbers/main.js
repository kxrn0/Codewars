function primes(n) {
	const numbers = [];
	const byme = Math.sqrt(n);

	for (let i = 2; i <= n; i++) {
		const sqrt = Math.sqrt(i);
		let isPrime;

		isPrime = true;

		for (let j = 2; j <= sqrt; j++)
			if (!(i % j)) {
				isPrime = false;
				break;
			}
		if (isPrime) numbers.push(i);
	}
	return numbers;
}

function primeFactors(n) {
	const numbers = primes(n);
	let zation;

	zation = "";
	for (let prime of numbers) {
		let count;

		count = 0;
		while (!(n % prime)) {
			n /= prime;
			count++;
		}
		if (count) {
			zation += `(${prime}${count > 1 ? `**${count}` : ""})`;
		}
	}
	return zation;
}

console.log(primeFactors(86240));

//pow(p, x) * m = n
