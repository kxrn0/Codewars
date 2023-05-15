function getLengthOfMissingArray(matrix) {
  if (
    !matrix ||
    !matrix.length ||
    matrix.some((array) => !array || !array.length)
  )
    return 0;

  matrix.sort((a, b) => a.length - b.length);

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].length - matrix[i - 1].length > 1)
      return matrix[i].length - 1;
  }
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);

//time: 04mins, 58secs
