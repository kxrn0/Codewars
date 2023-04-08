function partsSums(array) {
  const sums = [];
  let total;

  total = array.reduce((tot, curr) => tot + curr, 0);
  for (let i = 0; i < array.length; i++) {
    sums.push(total);
    total -= array[i];
  }
  sums.push(0);
  return sums;
}

console.log(partsSums([0, 1, 3, 6, 10]));

//time: 10mins, 19secs
