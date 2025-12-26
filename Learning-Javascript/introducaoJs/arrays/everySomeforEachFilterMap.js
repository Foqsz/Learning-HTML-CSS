const array = [1, 10, 15, true, "JavaScript"];

// Verifica se todos os itens do array são números usando every
const allNumbers = array.every((item) => {
  return typeof item === "number";
});

console.log(`every: ${allNumbers}`);

// Verifica se pelo menos um item do array é um número usando some
const someNumbers = array.some((item) => {
  return typeof item === "number";
});

console.log(`some: ${someNumbers}`);

// Utilizando filter para criar um novo array apenas com os números do array original
let array1 = array.filter((el, i, _arr) => {
  return typeof el === "number";
});

// Utilizando forEach para imprimir cada elemento do array original
array.forEach((el, i, _arr) => {
  console.log(`#${i}, ${el}`);
  if(typeof el === "boolean") {
    console.log(`O elemento #${i} é um booleano.`);
  } 
});

// Utilizando map para criar um novo array com o quadrado dos números do array1 multiplicados por ele mesmo
array1 = array1.map((el, i, _arr) => {
    return el * el;
});

console.log(array);
console.log(array1);
