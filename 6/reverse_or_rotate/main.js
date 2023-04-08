function revrot(string, size) {
  if (size <= 0 || !string || size > string.length) return "";

  const chunks = [];

  for (let i = 0; i < string.length; i += size)
    if (i + size < string.length + 1) chunks.push(string.slice(i, i + size));

  return chunks
    .map((chunk) => {
      const digits = chunk.split("");
      const cubeSum = digits.reduce(
        (total, current) => total + Math.pow(Number(current), 3),
        0
      );

      if (!(cubeSum % 2)) return digits.reverse().join("");
      return `${chunk.slice(1)}${chunk[0]}`;
    })
    .join("");
}

console.log(revrot("123456987654", 6));

//time: 23mins, 21secs
