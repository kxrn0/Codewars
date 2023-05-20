function validate(n) {
  const digits = String(n)
    .split("")
    .reverse()
    .map((c) => Number(c));
  const luhnSum = digits.reduce((total, current, index) => {
    let double;

    double = index % 2 ? 2 * current : current;

    if (double >= 10) double -= 9;

    return total + double;
  }, 0);

  return !(luhnSum % 10);
}

console.log(validate(891));
console.log(validate(123));

//time: 14mins, 26secs
