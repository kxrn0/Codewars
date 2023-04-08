function stockList(art, cat) {
  if (!art.length || !cat.length) return "";

  const list = [];

  result = "";
  for (let k of cat) {
    const count = art.reduce(
      (total, current) =>
        total + (current[0] === k ? Number(current.split(" ")[1]) : 0),
      0
    );

    list.push(`(${k} : ${count})`);
  }
  return list.join(" - ");
}

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
);

//time: 13mins, 11secs
