function thirt(n) {
  const rems = [1, 10, 9, 12, 3, 4];
  let sol;

  sol = -1;
  while (true) {
    const digits = String(n)
      .split("")
      .reverse()
      .map((d) => Number(d));
    let sum;

    sum = 0;
    for (let i = 0; i < digits.length; i++)
      sum += digits[i] * rems[i % rems.length];

    if (sum === sol) break;

    sol = sum;
    n = sum;
  }
  return sol;
}

console.log(thirt(1234567));
console.log(thirt(8529));

//time: 22mins, 00secs
