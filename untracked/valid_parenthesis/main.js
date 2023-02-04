function validParentheses(parents) {
	const deletedIndices = [];

	for (let i = 0; i < parents.length; i++) {
		if (deletedIndices.includes(i)) continue;

		const stack = [];

		if (parents[i] === ")" && !deletedIndices.includes(i))
			return false;

		for (let j = i + 1; j < parents.length; j++) {
			if (j === parents.length - 1 && stack.length)
				return false;

			if (parents[j] === "(") stack.push(j);
			else {
				deletedIndices.push(j);

				if (stack.length)
					deletedIndices.push(stack.pop());
				else {
					deletedIndices.push(i);
					break;
				}
			}
		}
	}
	return true;
}

console.log(validParentheses(")))((("));
console.log(validParentheses("((()))"));
console.log(validParentheses("()()()"));
