function countSmileys(array) {
	const reg = /[:;][\-~]?[D)]/;
	return array.filter((smile) => reg.test(smile)).length;
}

console.log(countSmiley([":)", ";(", ";}", ":-D"]));
console.log(countSmiley([";D", ":-(", ":-)", ";~)"]));
console.log(countSmiley([";]", ":[", ";*", ":$", ";-D"]));

//time: 05mins, 07secs
