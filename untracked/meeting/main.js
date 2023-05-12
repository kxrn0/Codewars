function meeting(list) {
  const names = list.split(";").map((name) => {
    const parts = name.split(":");

    return { first: parts[0].toUpperCase(), last: parts[1].toUpperCase() };
  });

  names.sort((one, two) => {
    if (one.last === two.last) return one.first < two.first ? -1 : 1;
    return one.last < two.last ? -1 : 1;
  });

  return names.reduce(
    (total, current) => `${total}(${current.last}, ${current.first})`,
    ""
  );
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
