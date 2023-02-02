function findOutlier(numbers) {
	let sumOdd, sumEven, fun;

	sumOdd = 0;
	sumEven = 0;

	for (let i = 0; i < 3; i++)
		if (numbers[i] % 2) sumOdd++;
		else sumEven++;

	if (sumOdd >= 2) fun = (n) => !(n % 2);
	else fun = (n) => n % 2;
	return numbers.find(fun);
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

//time: 9mins, 47secs
