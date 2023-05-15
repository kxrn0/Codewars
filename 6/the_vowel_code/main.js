function encode(string) {
  const map = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  let result;

  result = "";
  for (let char of string) {
    if (map.hasOwnProperty(char)) result += map[char];
    else result += char;
  }
  return result;
}

function decode(string) {
  const map = ["a", "e", "i", "o", "u"];

  let result;

  result = "";
  for (let char of string) {
    const index = Number(char);

    if (index) result += map[index - 1];
    else result += char;
  }

  return result;
}

console.log(decode("th3s 3s 1 str3ng"));

//time: 12mins, 28secs
