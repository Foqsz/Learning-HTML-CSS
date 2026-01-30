class Animal {
    constructor(name, tipo) {
        this.tipo = tipo;
        this.name = name
    }

    falar(){
        console.log(`O ${this.tipo} está fazendo um som.`);
    }

    nome(){
        console.log(`O nome do animal é ${this.name}`);
    }
} 

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

let dog = new Animal('Rex', 'Mamifero');
let cat = new Animal('Miau', 'Mamifero');
let snake = new Animal('Peçonha', 'Réptil');

console.log(dog.obterTipo());

dog.falar(); // O Cachorro está fazendo um som.
dog.nome(); // O nome do animal é Rex

Array.prototype.map

let arr = new Array(1, 2, 3, 4, 5);
arr.map(function(item){
    console.log(item * 2);
});