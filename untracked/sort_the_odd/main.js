function sortArray(array) {
	const odds = array.filter((n) => n % 2).sort((a, b) => a - b);

	for (let i = 0, k = 0; i < array.length; i++)
		if (array[i] % 2) array[i] = odds[k++];
	return array;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
