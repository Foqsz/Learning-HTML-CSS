class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error("Classe abstrata não pode ser instanciada");
    }
  }

  fazerSom() {
    throw new Error("Método abstrato");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    return "Au au";
  }
}

const dog = new Cachorro();
const animal = new Animal();
console.log(animal.fazerSom())
console.log(dog.fazerSom());
