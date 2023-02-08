class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}

	toString() {
		let result, current;

		result = "";
		current = this;

		while (current.next) {
			result += `${current.data} -> `;
			current = current.next;
			if (!current.next) result += `${current.data}`;
		}
		return result;
	}
}

/*
const list = new Node(0, null);
let current;

current = list;

for (let i = 1; i < 10; i++) {
	current.next = new Node(i, null);

	current = current.next;
}

console.log(list.toString());

function add_list(node) {
	let sum, current;

	sum = 0;
	current = node;
	while (current) {
		sum += current.data;
		current = current.next;
	}
	return sum;
}
*/

function loop_size(node) {
	let current;

	current = node;
	while (current) {
		const seen = [];
		let count, other;

		count = 0;
		other = current.next;
		while (other && !seen.includes(other)) {
			count++;

			if (current === other) return count;

			seen.push(other);
			other = other.next;
		}
		current = current.next;
	}
	return 0;
}

const head = new Node("a", null);
const next = new Node("b", null);
const loopStart = new Node("c", null);
const first = new Node(1, null);
const second = new Node(2, null);
const third = new Node(3, null);

loopStart.next = first;
first.next = second;
second.next = third;
third.next = loopStart;

head.next = next;
next.next = loopStart;

const single = new Node("a", 0);
single.next = single;

const uno = new Node("1", null);
const dos = new Node("2", null);

uno.next = dos;
dos.next = uno;

const 一 = new Node("1", null);
const ニ = new Node("2", null);
const 三 = new Node("3", null);

一.next = ニ;
ニ.next = 三;
三.next = 一;

console.log(loop_size(head));
console.log(loop_size(single));
console.log(loop_size(uno));
console.log(loop_size(一));
