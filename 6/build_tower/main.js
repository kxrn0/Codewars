function towerBuilder(floors) {
	const tower = [];

	for (let i = 0, j = floors - 1; i < floors; i++, j--) {
		let floor;

		floor = "";
		for (let k = 0; k < j; k++) floor += " ";
		for (let k = 0; k < 2 * i + 1; k++) floor += "*";
		for (let k = 0; k < j; k++) floor += " ";
		tower.push(floor);
	}
	return tower;
}

const three = towerBuilder(3);

for (let floor of three) console.log(floor);

//time: 08mins, 48secs
