function twoSum(numbers, target) {
	for (let i = 0; i < numbers.length - 1; i++)
		for (let j = i + 1; j < numbers.length; j++)
			if (numbers[i] + numbers[j] === target) return [i, j];
}

console.log(twoSum([1, 2, 3], 4));

//time: 03mins, 04secs
