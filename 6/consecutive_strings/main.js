function longestConsec(array, k) {
	if (!k || k < array.length) return "";

	let longest;

	longest = "";
	for (let i = 0; i < array.length; i++) {
		let current;

		current = "";
		for (let j = i; j < i + k && array[j]; j++) current += array[j];
		if (current.length > longest.length) longest = current;
	}
	return longest;
}

console.log(
	longestConsec(
		["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],
		2
	)
);

console.log(
	longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);

//time: 12mins, 27secs
