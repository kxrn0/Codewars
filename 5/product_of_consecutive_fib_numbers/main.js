function productFib(prod) {
	let fn, fn1;

	fn = 0;
	fn1 = 1;

	while (fn * fn1 <= prod) {
		if (fn * fn1 === prod) return [fn, fn1, true];

		const temp = fn1;

		fn1 += fn;
		fn = temp;
	}
	return [fn, fn1, false];
}

console.log(productFib(714));
console.log(productFib(800));
