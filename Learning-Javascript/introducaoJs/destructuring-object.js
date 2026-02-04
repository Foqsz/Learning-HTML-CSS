const arr = [1, 2, 3, 4]

//com destructuring
const [n1, n2] = arr;

//sem destructuring
// const n1 = arr[0]
// const n2 = arr[1]

const pessoa = {nome: "Victor", sobrenome: "Vinicius", empresa: "fDev"}

//sem destructuring
// let empresa = pessoa.empresa
// let nome = pessoa.nome

//com destructuring
const {empresa: empresaNome, nome: pessoaNome} = pessoa

console.log(empresaNome, pessoaNome) 