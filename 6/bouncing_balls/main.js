function bouncingBall(height, bounce, window) {
	if (height < 0 || bounce >= 1 || bounce <= 0 || window >= height)
		return -1;

	let count;

	count = 1;
	while (height > window) {
		count += 2;
		height *= bounce;
	}
	return count - 2;
}

console.log(bouncingBall(3, 0.66, 1.5));

//time: 10mins, 09secs
