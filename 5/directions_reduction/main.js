const table = {
	NORTH: 1,
	SOUTH: -1,
	EAST: 10,
	WEST: -10,
};

function is_reducible(array) {
	for (let i = 0; i < array.length - 1; i++)
		if (!(table[array[i]] + table[array[i + 1]])) return true;
	return false;
}

function dirReduc(array) {
	while (is_reducible(array)) {
		const reduced = [];
		const indices = [];

		for (let i = 0; i < array.length - 1; i++) {
			if (indices.includes(i)) continue;

			if (!(table[array[i]] + table[array[i + 1]])) {
				indices.push(i);
				indices.push(i + 1);
			}
		}

		for (let i = 0; i < array.length; i++)
			if (!indices.includes(i)) reduced.push(array[i]);
		array = reduced;
	}
	return array;
}

console.log(
	dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

//time: 44mins, 36secs
