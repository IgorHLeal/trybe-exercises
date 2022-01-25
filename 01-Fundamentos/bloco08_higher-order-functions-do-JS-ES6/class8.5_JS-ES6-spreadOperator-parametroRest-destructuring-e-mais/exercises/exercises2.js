/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
    
    Dica: use parâmetro rest. */

// escreva sum abaixo
const sum = (...args) => args.reduce((acc, current) => acc + current);

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10.56));