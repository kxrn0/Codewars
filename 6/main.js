function findUniq(array) {
	const items = {};
	let value;

	for (let i = 0; i < 3; i++)
		if (items[array[i]] === undefined)
			items[array[i]] = { count: 0, value: array[i] };
		else items[array[i]].count++;

	for (let key in items)
		if (items[key].count >= 1) value = items[key].value;
	return array.find((number) => number !== value);
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0.55, 0, 0, 0, 0]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([0, 0.55, 0, 0]));

//time: 16mins, 02secs
