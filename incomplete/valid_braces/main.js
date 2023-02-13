function validBraces(braces) {
	const removed = [];

	for (let i = 0; i < braces.length; i++) {
		if (removed.includes(i)) continue;

		if (
			(braces[i] === ")" ||
				braces[i] === "]" ||
				braces[i] === "}") &&
			!removed.includes(i)
		)
			return false;

		const stack = [];
		let last;

		for (let j = i + 1; j < braces.length; j++) {
			let toBreak;

			if (j === braces.length && stack.length) return false;

			last = null;
			toBreak = false;

			switch (braces[j]) {
				case "(":
				case "[":
				case "{":
					stack.push(j);
					break;
				case ")":
					if (stack.length) last = stack.pop();
					else last = i;

					if (braces[last] === "(") {
						removed.push(last);
						removed.push(j);
						toBreak = true;
					} else return false;
					break;
				case "]":
					if (stack.length) last = stack.pop();
					else last = i;

					if (braces[last] === "[") {
						removed.push(last);
						removed.push(j);
						toBreak = true;
					} else return false;
					break;
				case "}":
					if (stack.length) last = stack.pop();
					else last = i;

					if (braces[last] === "{") {
						removed.push(last);
						removed.push(j);
						toBreak = true;
					} else return false;
					break;
			}
			if (toBreak) break;
		}
	}
	return true;
}

console.log(validBraces("()))"));
console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));

/*
 * How do you determine if a set of braces is valid? How do you know that "(){}" is valid, but "(}{)" is not?
 * What about "(([{()}]))"?
 *
 */
