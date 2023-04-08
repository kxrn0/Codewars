function validPhoneNumber(number) {
  const reg = /^\(\d{3}\) \d{3}-\d{4}$/;

  return reg.test(number);
}

console.log(validPhoneNumber("(123) 456-7890"));

//time: 03mins, 48secs
