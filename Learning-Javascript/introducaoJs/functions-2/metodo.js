

const dog = {
    name: "rex",
    falar: latir
} 

const cat = {
    name: "mingau",
    falar(){
        console.log(this);
        miar.call(this);
    }
}

function latir(){
    console.log(this.name + " au au");
}

function miar(){
    console.log(this.name + " miau miau");
}

dog.falar(); // rex au aua
cat.falar(); // mingau miau miau