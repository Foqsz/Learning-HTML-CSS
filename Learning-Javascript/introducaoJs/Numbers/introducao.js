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


num = 4456
console.log(isNaN(num));

let arr = [1, 2, 3, 4, 6]

console.log(Math.max(...arr))
console.log(Math.min(...arr))
console.log(Math.round(12.3123123))
console.log(Math.floor(59.9999999))
console.log(Math.ceil(49.9999999))

console.log(Math.pow(2, 3))
console.log(2 ** 3)

console.log(Math.sqrt(49))
console.log(Math.cbrt(8))

console.log(Math.random(...arr))