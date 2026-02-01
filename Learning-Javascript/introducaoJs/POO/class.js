class Animal{
    constructor(idade, tipo){
        if(tipo || idade)
        {
            this.tipo = tipo || "Desconhecido";
            this.idade = idade || 0;
        } 
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

class Pessoa {
    constructor(nome) {
        this._nome = nome; // "_" é só convenção para indicar privado
    }

    // GET → pegar valor
    get nome() {
        return this._nome;
    }

    // SET → alterar valor
    set nome(novoNome) {
        this._nome = novoNome;
    }
}

const p1 = new Pessoa("Victor");

console.log(p1.nome); // GET → Victor

p1.nome = "Carlos"; // SET

console.log(p1.nome); // Carlos
