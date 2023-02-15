String.prototype.camelCase = function () {
	return this.length
		? this.trim()
				.split(" ")
				.map(
					(word) =>
						`${word[0].toUpperCase()}${word.slice(
							1
						)}`
				)
				.join("")
		: "";
};

console.log("hi this is a string".camelCase());
console.log("".camelCase())

//time: 10mins, 30secs
