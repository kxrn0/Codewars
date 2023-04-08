function dataReverse(data) {
  const chunks = [];

  for (let i = 0; i < data.length; i += 8) chunks.push(data.slice(i, i + 8));

  return chunks
    .reverse()
    .reduce((result, current) => [...result, ...current], []);
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);

//time: 07mins, 03secs
