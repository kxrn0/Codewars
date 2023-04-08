const goodValue = [1, 2, 3, 3, 4, 10];
const badValue = [1, 2, 2, 2, 3, 5, 10];

function goodVsEvil(good, evil) {
  const score = (arr, type) =>
    arr.reduce((tot, curr, index) => tot + Number(curr) * type[index], 0);
  const goodScore = score(good.split(" "), goodValue);
  const badScore = score(evil.split(" "), badValue);

  if (goodScore === badScore)
    return "Battle Result: No victor on this battle field";
  else if (goodScore > badScore)
    return "Battle Result: Good triumphs over Evil";
  else return "Battle Result: Evil eradicates all trace of Good";
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));

//time: 11mins, 49secs