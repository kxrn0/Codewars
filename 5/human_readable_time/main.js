function humanReadable(seconds) {
	const secsInHours = 60 * 60;
	const secsInMins = 60;
	let hours, minutes;

	hours = ~~(seconds / secsInHours);
	seconds = seconds % secsInHours;
	minutes = ~~(seconds / secsInMins);
	seconds = seconds % secsInMins;

	return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
		2,
		"0"
	)}:${String(seconds).padStart(2, "0")}`;
}

//time: 6mins, 18secs
