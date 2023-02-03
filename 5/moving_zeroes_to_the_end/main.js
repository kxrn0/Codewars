function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

function moveZeros(array) {
	let zeroes;

	zeroes = 0;

	for (let i = array.length - 1; i >= 0; i--)
		if (array[i] === 0) {
			zeroes++;
			array = remove(array, i);
		}
	return array.concat(new Array(zeroes).fill(0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//time: 10mins, 56secs
