const table = {
	1: 1000,
	2: 200,
	3: 300,
	4: 400,
	5: 500,
	6: 600,
};

const minorTable = {
	1: 100,
	5: 50,
};

function score(dice) {
	let total;

	total = 0;
	for (let i = 1; i < 7; i++) {
		let count;

		count = 0;
		for (let j = 0; j < dice.length; j++) {
			if (dice[j] === i) count++;
			if (count === 3) {
				total += table[i];
				count = 0;
			}
			if (
				j === dice.length - 1 &&
				count &&
				(i === 5 || i === 1)
			)
				total += count * minorTable[i];
		}
	}
	return total;
}

console.log(score([2, 3, 4, 6, 2]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([2, 4, 4, 5, 4]));

//time: 24mins, 39secs
