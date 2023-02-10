function inArray(array1, array2) {
	const result = [];

	for (let item of array1)
		if (
			item &&
			array2.some((other) => other.match(new RegExp(item)))
		)
			result.push(item);
	return result.sort();
}

console.log(
	inArray(
		["arp", "live", "strong"],
		["lively", "alive", "harp", "sharp", "armstrong"]
	)
);

//time: 05mins, 23secs
