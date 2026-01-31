function Animal(tipo){
    this.tipo = tipo || "Desconhecido";
}

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

function Cachorro(nome, tipo){
    this.nome = nome;
    Animal.call(this, tipo);
    this.constructor = Cachorro;
}

Cachorro.prototype = new Animal()

let rex = new Cachorro("Rex", "Mamífero");
console.log(rex);

for(let prop in rex){
    console.log(prop)
}