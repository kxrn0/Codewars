function nthFibo(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let nth, nth_1;

  nth = 0;
  nth_1 = 1;
  for (let i = 0; i < n - 2; i++) {
    const temp = nth_1;

    nth_1 += nth;
    nth = temp;
  }
  return nth_1;
}

console.log(nthFibo(4));

//time: 05mins, 18secs
