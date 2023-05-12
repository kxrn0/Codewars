function cleanString(string) {
  let chars;

  chars = string.split("");

  while (~chars.indexOf("#")) {
    const index = chars.indexOf("#");

    if (index) chars = chars.slice(0, index - 1).concat(chars.slice(index + 1));
    else chars = chars.slice(1);
  }
  return chars.join("");
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));
