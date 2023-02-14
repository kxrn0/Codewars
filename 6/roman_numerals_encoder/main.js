const table = [
	{ symbol: "M", value: 1000 },
	{ symbol: "D", value: 500 },
	{ symbol: "C", value: 100 },
	{ symbol: "L", value: 50 },
	{ symbol: "X", value: 10 },
	{ symbol: "V", value: 5 },
	{ symbol: "I", value: 1 },
];

function solution(number) {
	return String(number)
		.split("")
		.map((n, index, array) => {
			n = Number(n) * Math.pow(10, array.length - 1 - index);

			const r = table.find((v) => v.value === n);

			if (r) return r.symbol;

			let final;

			final = "";
			while (n) {
				for (let i = 0; i < table.length - 1; i++)
					for (
						let j = i + 1;
						j < table.length;
						j++
					)
						if (
							table[i].value -
								table[j]
									.value ===
							n
						) {
							final += `${table[j].symbol}${table[i].symbol}`;
							n -=
								table[i].value -
								table[j].value;
							break;
						}

				for (let roman of table)
					if (n >= roman.value) {
						final += roman.symbol;
						n -= roman.value;
						break;
					}
			}
			return final;
		})
		.join("");
}

console.log(solution(1776));
console.log(solution(1918));
console.log(solution(1944));
console.log(solution(2023));

//time: 55mins, 16secs
