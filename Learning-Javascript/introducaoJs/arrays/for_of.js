const arr = [1, 2, 3];

const obj = {
    nome: 'João',
    idade: 30,
    altura: 1.75,
    email: 'Maria@gmail.com'
}

for(let prop in obj){
    console.log(`${prop}: ${obj[prop]}`);
}

for(n of arr){
    console.log(n); 
}

let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}