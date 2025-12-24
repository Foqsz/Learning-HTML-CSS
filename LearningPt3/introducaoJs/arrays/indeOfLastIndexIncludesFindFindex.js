let array = [10, 20, 30, 40, 50, 30, 70, 10, 20, 30];

// indexOf - retorna o índice da primeira ocorrência do elemento no array
console.log(array.indexOf(70)); // Saída: 6

// lastIndexOf - retorna o índice da última ocorrência do elemento no array
console.log(array.lastIndexOf(40)); // Saída: 3

// includes - verifica se o elemento existe no array, retornando true ou false
console.log(array.includes(50)); // Saída: true

// find - retorna o primeiro elemento que satisfaz a condição fornecida
let foundElement = array.find((element) => element > 50 );
console.log(foundElement); // Saída: 70

// findIndex - retorna o índice do primeiro elemento que satisfaz a condição fornecida
let foundIndex = array.findIndex((element) => element > 50 );
console.log(foundIndex); // Saída: 6