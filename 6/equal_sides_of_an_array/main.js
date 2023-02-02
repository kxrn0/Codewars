function findEvenIndex(array) {
	for (let i = 0; i < array.length; i++) {
		const left = array
			.slice(0, i)
			.reduce((total, current) => total + current, 0);
		const right = array
			.slice(i + 1)
			.reduce((total, current) => total + current, 0);

		if (left === right) return i;
	}
	return -1;
}

//time: 7mins, 35secs
