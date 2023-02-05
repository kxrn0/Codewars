function cakes(recipe, ingredients) {
	let min;

	min = Number.POSITIVE_INFINITY;

	for (let ingredient in recipe) {
		if (!ingredients[ingredient]) return 0;
		else {
			const amount = ~~(
				ingredients[ingredient] / recipe[ingredient]
			);
			if (min > amount) min = amount;
		}
	}
	return min;
}

console.log(
	cakes(
		{ flour: 500, sugar: 200, eggs: 1 },
		{ flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
	)
);

console.log(
	cakes(
		{ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
		{ sugar: 500, flour: 2000, milk: 2000 }
	)
);

//time: 06mins, 33secs
