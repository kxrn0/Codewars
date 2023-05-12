function pickPeaks(array) {
  const solution = { pos: [], peaks: [] };

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] >= array[i + 1]) {
      if (array[i] > array[i + 1]) {
        solution.pos.push(i);
        solution.peaks.push(array[i]);
        i++;
      } else {
        const currentIndex = i;

        for (
          let j = i + 1;
          array[currentIndex] === array[j] && j < array.length;
          j++
        )
          i++;
        if (i !== )
      }
    }
  }
  return solution;
}
