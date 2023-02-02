function tribonacci(signature, n) {
	if (n < 3) return signature.slice(0, n);

	const numbers = [...signature];

	for (let i = 2; i < n - 1; i++)
		numbers.push(numbers[i] + numbers[i - 1] + numbers[i - 2]);

	return numbers;
}

console.log(tribonacci([1, 1, 1], 10));

//time: 9mins, 8secs
