function sum(){
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, atual) => {
      return sum + atual;
  }, 0);
}

function average(){
  return sum(...arguments) / arguments.length;
}

let sumResult = sum(1,2,3,4,5); // 15
console.log(sumResult);

let sumMedia = average(1,2,3,4,5);
console.log(sumMedia);  