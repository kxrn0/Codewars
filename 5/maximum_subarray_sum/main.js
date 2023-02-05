function maxSequence(array) {
	if (!array.length || array.every((n) => n < 0)) return 0;
	if (array.every((n) => n > 0))
		return array.reduce((total, current) => total + current, 0);

	let max;

	max = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < array.length; i++)
		for (let j = i; j < array.length; j++) {
			let sum;

			sum = 0;
			for (let k = i; k <= j; k++) sum += array[k];

			if (max < sum) max = sum;
		}

	return max;
}

//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([49, -39, 40, 9, -12, 32]));

//time: 21mins, 32secs
