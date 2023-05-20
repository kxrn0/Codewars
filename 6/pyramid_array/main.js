function pyramid(n) {
  const arrays = [];

  for (let i = 1; i <= n; i++) {
    const array = new Array(i).fill(1);

    arrays.push(array);
  }
  return arrays;
}

console.log(pyramid(5));

//time: 02mins, 35secs
