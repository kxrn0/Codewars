function alphanumeric(string) {
	const reg = /^[a-z0-9]+$/i;

	return reg.test(string);
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("    "));

//time: 5mins, 33secs
