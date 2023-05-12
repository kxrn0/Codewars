const REGEXP = /^[0-9a-zA-Z]{6,}$/i;

console.log(REGEXP.test("strABC88ing"));
console.log(REGEXP.test("stri4324aAdsd"));
console.log(REGEXP.test("strin%g"));
