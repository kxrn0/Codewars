function findMissingLetter(array) {
	for (let i = 0; i < array.length - 1; i++)
		if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) == 2)
			return String.fromCharCode(array[i].charCodeAt() + 1);
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
