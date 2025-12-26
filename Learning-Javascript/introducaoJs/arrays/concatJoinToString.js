const array = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

console.log(array.toString()); // "1,2,3,4,5"

console.log(array.join(" - ")); // "1 - 2 - 3 - 4 - 5"

let novoArray = array.concat(array2);
console.log(novoArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arrayConcat = [1, 2, 3];
let arrayConcat2 = [].concat(arrayConcat);

arrayConcat2[arrayConcat2.length] = "Novo Valor";

console.log(arrayConcat);
console.log(arrayConcat2);