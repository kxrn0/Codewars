function order(words) {
	return words
		.split(" ")
		.sort((one, two) => {
			const first = Number(one.match(/\d+/)[0]);
			const second = Number(two.match(/\d+/)[0]);

			return first - second;
		})
		.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

//time: 5mins, 33secs
