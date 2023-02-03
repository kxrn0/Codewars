function comp(array1, array2) {
	if (!array1 || !array2) return false;

	const deletedIndices = [];

	for (let n of array1) {
		let found;

		found = false;
		for (let j = 0; j < array2.length; j++)
			if (
				n * n === array2[j] &&
				!deletedIndices.some((i) => i === j)
			) {
				deletedIndices.push(j);
				found = true;
				break;
			}
		if (!found) return false;
	}
	return true;
}

//time: 11mins, 10secs
