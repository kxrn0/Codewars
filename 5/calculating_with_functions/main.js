function zero(fun) {
	return fun ? fun(0) : 0;
}
function one(fun) {
	return fun ? fun(1) : 1;
}
function two(fun) {
	return fun ? fun(2) : 2;
}
function three(fun) {
	return fun ? fun(3) : 3;
}
function four(fun) {
	return fun ? fun(4) : 4;
}
function five(fun) {
	return fun ? fun(5) : 5;
}
function six(fun) {
	return fun ? fun(6) : 6;
}
function seven(fun) {
	return fun ? fun(7) : 7;
}
function eight(fun) {
	return fun ? fun(8) : 8;
}
function nine(fun) {
	return fun ? fun(9) : 9;
}

function plus(second) {
	return (first) => first + second;
}
function minus(second) {
	return (first) => first - second;
}
function times(second) {
	return (first) => first * second;
}
function dividedBy(second) {
	return (first) => ~~(first / second);
}

console.log(one(plus(two())));

//time: 14mins, 56secs
