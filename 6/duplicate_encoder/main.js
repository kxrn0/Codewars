function count(char, string) {
	let sum;

	sum = 0;
	for (let other of string) if (other === char) sum++;
	return sum;
}

function duplicateEncode(string) {
	let encoded;

	encoded = "";
	string = string.toLowerCase();

	for (let char of string)
		if (count(char, string) > 1) encoded += ")";
		else encoded += "(";

	return encoded;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("redece"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

//time: 4mins, 55secs
