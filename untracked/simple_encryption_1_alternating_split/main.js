function encrypt(text, n) {
  if (!text || n < 0) return text;

  const shift = (array, cond) =>
    array.reduce((total, curr, index) => total + (cond(index) ? curr : ""), "");
  let result;

  result = text;
  for (let i = 0; i < n; i++) {
    result = result.split("");
    const odds = shift(result, (n) => n % 2);
    const evens = shift(result, (n) => !(n % 2));

    result = `${odds}${evens}`;
  }
  return result;
}

function decrypt(text, n) {
  if (!text || n < 0) return text;

  const size = text.length / 2;
  let result;

  result = text;

  for (let i = 0; i < n; i++) {
    const odds = result.slice(0, size);
    const evens = result.slice(size, text.length);

    result = "";

    for (let j = 0, odd = 0, even = 0; j < text.length; j++)
      if (j % 2) result += odds[odd++];
      else result += evens[even++];
  }
  return result;
}

console.log(decrypt(encrypt("Shalom!", 3), 3));
