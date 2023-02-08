function findNb(volume) {
	let cubes, currentVolume;

	cubes = 0;
	currentVolume = 0;
	while (currentVolume <= volume) {
		currentVolume += Math.pow(cubes, 3);
		if (currentVolume === volume) return cubes;
		cubes++;
	}
	return -1;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));

//time: 07mins, 41secs
