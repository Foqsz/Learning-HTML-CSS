const str = "Global string";

function teste(str){ 
    console.log(this);
    console.log(str); 
}

const teste2 = () => {
    console.log("arrow function");
    console.log(this);
}

teste2(); // Output: arrow function \n Global string
// teste(); // Output: Global string

const obj = {
    foo: "bar",
    teste,
    teste2
};

obj.teste();
obj.teste2();
