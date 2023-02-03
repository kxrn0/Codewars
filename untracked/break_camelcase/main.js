function solution(string) {
	const ords = string.split(/[A-Z]/);
	const caps = string.match(/[A-Z]/g);
	let finalSolution;

	finalSolution = ords[0];

	for (let i = 1; i < ords.length; i++)
		finalSolution += ` ${caps[i - 1]}${ords[i]}`;
	return finalSolution;
}

console.log(solution("thisIsAnotherString"));
