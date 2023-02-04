const table = [];

for (let i = 0; i < 10; i++) table[i] = i;

table[10] = "A";
table[11] = "B";
table[12] = "C";
table[13] = "D";
table[14] = "E";
table[15] = "F";

function reverse_string(string) {
	const mid = string.length / 2;
	let reversed;

	reversed = new Array(string.length);
	for (let i = 0, j = string.length - 1; i <= mid; i++, j--) {
		reversed[i] = string[j];
		reversed[j] = string[i];
	}
	return reversed.join("");
}

function decimal_to_hexadecimal(number) {
	let hex;

	hex = "";
	while (number) {
		hex += table[number % 16];
		number = ~~(number / 16);
	}
	return reverse_string(hex);
}

function minmax(min, max, ideal) {
	return Math.min(max, Math.max(min, ideal));
}

function rgb(r, g, b) {
	r = decimal_to_hexadecimal(minmax(0, 255, r)).padStart(2, "0");
	g = decimal_to_hexadecimal(minmax(0, 255, g)).padStart(2, "0");
	b = decimal_to_hexadecimal(minmax(0, 255, b)).padStart(2, "0");

	return `${r}${g}${b}`;
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
console.log(rgb(173, 255, 47));

//time: 32mins, 06secs
