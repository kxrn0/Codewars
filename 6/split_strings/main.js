function solution(str) {
	const pairs = [];

	for (let i = 0; i < str.length; i += 2)
		pairs.push(`${str[i]}${str[i + 1] ? str[i + 1] : "_"}`);
	return pairs;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));

//time: 8mins, 59secs
