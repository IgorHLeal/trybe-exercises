"use strict";
// Arays
let names = ["Mary Joe", "Alan Joe"];
console.log(names);
// Tuplas
let fullName = ['Igor', 'Leal'];
console.log(fullName);
let person = ['Igor Leal', 26];
console.log(person);
console.log(' ');
function sumNumbers(sum) {
    return console.log(`A soma de x e y é: ${sum.x + sum.y}`);
}
sumNumbers({ x: 10, y: 15 });
console.log(' ');
function returnCpf(cpf) {
    console.log(`Seu cpf é: ${cpf}`);
}
returnCpf(12653592614);
returnCpf('126.535.926-14');
