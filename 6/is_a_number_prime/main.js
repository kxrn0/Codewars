function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2) return true;

	const sqrt = Math.sqrt(n);

	for (let i = 2; i <= sqrt; i++) if (!(n % i)) return false;
	return true;
}

//time: 4mins, 31secs
