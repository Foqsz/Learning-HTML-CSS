let classe = "";
const classesPermitidas = ["mamifero", "reptil", "anfibio", "ave", "peixe"];

const cachorro = {
  name: "Rex",

  get classe() {
    return classe;
  },

  set classe(_classe) {
    if (classesPermitidas.includes(_classe)) {
      classe = _classe;
    }
  },
};

console.log(cachorro);

(function () {
  let classe = "";
  const classesPermitidas = ["mamifero", "reptil", "anfibio", "ave", "peixe"];

  const gato = {
    name: "Miau",

    get classe() {
      return classe;
    },

    set classe(_classe) {
      if (classesPermitidas.includes(_classe)) {
        classe = _classe;
      }
    },
  };

  this.gato = gato;
})();

console.log(gato.classe);
gato.classe = "mamifero";
gato.classe = "inseto";
console.log(gato.classe);

function criarAnimal(nome, classe){
    let _classe = classe
    const _classesPermitidas = ["mamifero", "reptil", "anfibio", "ave", "peixe"];

    return {
        nome: nome,
        get classe(){
            return _classe;
        },

        set classe(novaClasse){
            if(_classesPermitidas.includes(novaClasse)){
                _classe = novaClasse;
            }
        }
    }
}

const tartaruga = criarAnimal("Lentilha", "Reptil");
console.log(tartaruga.nome);
console.log(tartaruga.classe);
tartaruga.nome = "Tutuga";
console.log(tartaruga.nome);
tartaruga.classe = "Nadadora";
console.log(tartaruga.classe);

class Animal {
    #classe // atributo privado

    constructor (nome, classe){
        this.nome = nome;
        this.#classe = classe;
    }

    get classe(){
        return this.#classe;
    }

    set classe(novaClasse){
        const _classesPermitidas = ["mamifero", "reptil", "anfibio", "ave", "peixe"];
        if(_classesPermitidas.includes(novaClasse)){
            this.#classe = novaClasse;
        }
    }

    #metodoPrivado(){
        console.log("Sou um método privado");
    }

    metodoPublico(){
        console.log("Sou um método público");
        this.#metodoPrivado();
    }
}

const nemo = new Animal("Nemo", "Peixe");
console.log(nemo);
nemo.classe = "mamifero";
console.log(nemo.classe);
nemo.classe = "porta";
console.log(nemo.classe);
nemo.classe = "peixe";
console.log(nemo.classe);

nemo.metodoPublico();