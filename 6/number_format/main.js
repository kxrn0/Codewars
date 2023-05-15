function numberFormat(number) {
  return `${number < 0 ? "-" : ""}${`${number >= 0 ? number : -number}`
    .split("")
    .reverse()
    .reduce(
      (formatted, current, index, array) =>
        `${formatted}${current}${
          index + 1 !== array.length && !((index + 1) % 3) ? "," : ""
        }`
    )
    .split("")
    .reverse()
    .join("")}`;
}

for (let i = 0; i < 10; i++) console.log(numberFormat(Math.pow(-10, i)));

//time: 22mins, 18secs