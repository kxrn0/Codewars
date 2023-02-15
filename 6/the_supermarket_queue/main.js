function queueTime(customers, tills) {
	let total;

	total = 0;
	while (customers.length) {
		for (let i = 0; i < customers.length && i < tills; i++)
			customers[i]--;
		total++;
		customers = customers.filter((customer) => customer);
	}
	return total;
}

console.log(queueTime([5, 4, 3], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));

//time: 12mins, 01secs
