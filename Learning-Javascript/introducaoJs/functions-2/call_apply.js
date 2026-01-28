// let name = "Victor";
// var name2 = "Pedro";

function teste(str, n){
    console.log(this.name);
    // console.log(this.name2);
    console.log(str, n);
}

teste.call({name: "Vinicius"}, "oi", 20);
teste.apply({name: "Ana"}, ["olá", 30]);
teste.call({name: "João"}, ...["hello", 40]);

// A principal diferença entre call e apply é a forma como os argumentos são passados.
// No call, os argumentos são passados individualmente, enquanto no apply, os argumentos são passados como um array.

const teste2 = teste.bind({name: "Mariana"});

teste2("Joaquina", 67);