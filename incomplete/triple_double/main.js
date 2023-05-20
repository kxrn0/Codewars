function repeats(string, reps) {
  for (let i = 0; i < string.length - reps - 1; i++) {
    let repeats;

    repeats = true;
    for (let j = i + 1; j < i + reps; j++) {
      if (string[j] !== string[i]) {
        repeats = false;
        break;
      }
    }
    if (repeats) return true;
  }
  return false;
}

function repeats_(string, reps) {

}

function tripledouble(num1, num2) {
  const reps1 = repeats(String(num1), 3);
  const reps2 = repeats(String(num2), 2);

  console.log(`one: ${reps1}, two: ${reps2}`);

  if (reps1 && reps2) return 1;
  return 0;
}

// console.log(tripledouble(10560002, 100));
console.log(tripledouble(1110202, 110202))
console.log(tripledouble(02021110202, 02110202))
console.log(tripledouble(101010202111, 10102022))
console.log(tripledouble(10110202, 1010202))

