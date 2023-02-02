function findEvenIndex(array) {
	const sum = (total, current) => total + current;

	for (let i = 0; i < array.length; i++) {
		const left = array.slice(0, i).reduce(sum, 0);
		const right = array.slice(i + 1).reduce(sum, 0);

		if (left === right) return i;
	}
	return -1;
}

//time: 7mins, 35secs
