function domainName(url) {
	const reg = /(https?:\/\/)?(www\.)?([a-z0-9-]+)\..+/i;

	return reg.exec(url)[3];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));

//time: 09mins, 09secs
