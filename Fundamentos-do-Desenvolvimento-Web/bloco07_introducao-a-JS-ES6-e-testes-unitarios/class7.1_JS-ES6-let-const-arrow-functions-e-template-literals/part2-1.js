// Exercício 1
const fatorial = number => {
    let result = 1;
    for (let index =  1; index <= number; index += 1) {
        result *= index;
    }
    return result;
}
console.log(fatorial(3));

// Bônus 
const fator = number => number > 1 ? number * fator(number -1) : 1;
console.log(fatorial(5));