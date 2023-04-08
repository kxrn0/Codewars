Array.prototype.square = function () {
  const squares = [];

  for (let n of this) squares.push(n * n);
  return squares;
};

Array.prototype.cube = function () {
  const cubes = [];

  for (let n of this) cubes.push(Math.pow(n, 3));
  return cubes;
};

Array.prototype.sum = function () {
  return this.reduce((total, current) => total + current, 0);
};

Array.prototype.average = function () {
  if (!this.length) return NaN;

  return this.sum() / this.length;
};

Array.prototype.even = function () {
  const evens = [];

  for (let n of this) if (!(n % 2)) evens.push(n);
  return evens;
};

Array.prototype.odd = function () {
  const odds = [];

  for (let n of this) if (n % 2) odds.push(n);
  return odds;
};

let byme = [1, 2, 3, 4, 5];

console.log(byme.square());

//time: 05mins, 32secs
