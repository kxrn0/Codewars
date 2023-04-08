function encryptThis(message) {
  return message
    .split(" ")
    .map((word) => {
      if (word.length > 2)
        return `${word[0].charCodeAt(0)}${word[word.length - 1]}${word.slice(
          2,
          word.length - 1
        )}${word[1]}`;
      return `${word[0].charCodeAt(0)}${word.slice(1)}`;
    })
    .join(" ");
}

console.log(encryptThis("A wise old owl lived in an oak"));

//time: 07mins, 46secs
