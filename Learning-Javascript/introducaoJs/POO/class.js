class Animal{
    constructor(idade, tipo){
        if(tipo)
            this.tipo = tipo;
        this.idade = idade;
    }

    obterTipo(){
        return this.tipo
    }
}
Animal.prototype.tipo = "Desconhecido"

class Gato extends Animal{
    constructor(nome, idade, tipo){ 
        super(idade, tipo);
        this.nome = nome;
    }
}

let gato = new Gato("Mingau", 3, "Mamífero");
console.log(gato)
let animal = new Animal(2, "Anfibio");
console.log(animal)