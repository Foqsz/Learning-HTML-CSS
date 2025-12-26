let array = [1, 2, 3, 4, 5];

// Adiciona um ou mais elementos ao final do array
array.push(6, 7);
console.log(array); // [1, 2, 3, 4, 5, 6, 7]

// Remove o último elemento do array
let lastElement = array.pop();
console.log(lastElement); // 7

// Remove o primeiro elemento do array
let firstElement = array.shift();
console.log(firstElement); // 1

console.log(array); // [2, 3, 4, 5, 6]

// Adiciona um ou mais elementos no início do array
array.unshift(0, 1);
console.log(array); // [0, 1, 2, 3, 4, 5, 6]

// Cria um novo array a partir de uma parte do array original
let newArray = array.slice(1, 3);
console.log(newArray); // [1, 2]

// Remove ou substitui elementos no array
array.splice(2, 2, 'a', 'b');
console.log(array); // [0, 1, 'a', 'b', 5, 6]