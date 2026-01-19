let num = 1234567.890;

console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));

console.log(num.toPrecision(5));
console.log(typeof num.toPrecision(5));

console.log((123).toPrecision(6));

num = 12.231231
console.log(num.toExponential());

console.log(typeof num.toString())

console.log(num.toString(2))

num = 112212.231231
console.log(num.toLocaleString());
console.log(num.toLocaleString("en-EN"));
console.log(num.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
console.log(num.toLocaleString("pt-PT", {style: "currency", currency: "EUR"}));
console.log(num.toLocaleString("en-US", {style: "currency", currency: "USD"}));