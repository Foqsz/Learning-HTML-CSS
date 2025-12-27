const array = [1, 2, 3, 4, 5];

function sum() {
    const numbers = new Array();
    Array.prototype.forEach.call(arguments, (num) => {  
        numbers.push(num);
    });

    return numbers.reduce((sum, atual) => {
        return sum + atual;
    }, 0);
}

function average() {
    return sum.apply(null, arguments) / arguments.length;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5));