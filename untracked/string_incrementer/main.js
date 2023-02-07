function count_leading_zeroes(strumber) {
	let count;

	count = 0;
	for (let i = 0; i < strumber.length; i++)
		if (Number(strumber[i])) return count;
		else count++;
	return count;
}

function incrementString(string) {
	const reg = /\d+$/;
	const index = string.search(reg);
	const noNumber = !~index;
	const wordPart = noNumber ? string : string.slice(0, index);
	const numberPart = noNumber ? 1 : string.slice(index);
	//const zeroes = noNumber ? 0 : count_leading_zeroes(numberPart);

	if (noNumber) return `${wordPart}${numberPart}`;

	return `${wordPart}${`${Number(numberPart) + 1}`.padStart(
		numberPart.length,
		"0"
	)}`;
}

console.log(incrementString("string"));
console.log(incrementString("string000"));
console.log(incrementString("hi023"));
console.log(incrementString("123"));
console.log(incrementString("123ksdf"));
console.log(incrementString("123ksf326"));
