function findMissing(list) {
  const diff1 = list[1] - list[0];
  const diff2 = list[2] - list[1];

  if (diff1 !== diff2) {
    if (Math.abs(diff1) < Math.abs(diff2)) return list[1] + diff1;
    else return list[0] + diff2;
  } else
    for (let i = 2; i < list.length - 1; i++)
      if (list[i + 1] - list[i] !== diff1) return list[i] + diff1;
}

console.log(findMissing([11, -7, -16]));
