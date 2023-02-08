function deleteNth(array, n) {
	const final = [];
	const items = {};

	for (let item of array) {
		if (items[item] === undefined) items[item] = 1;
		else items[item]++;

		if (items[item] <= n) final.push(item);
	}
	return final;
}

console.log(deleteNth([20, 37, 20, 21], 1));

//time: 07mins, 15secs
