function isValidWalk(walk) {
	if (walk.length !== 10) return false;

	const position = { x: 0, y: 0 };

	for (let char of walk)
		switch (char) {
			case "n":
				position.y++;
				break;
			case "s":
				position.y--;
				break;
			case "e":
				position.x++;
				break;
			case "w":
				position.x--;
				break;
		}
	return position.x === 0 && position.y === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

//time: 6mins, 15secs
