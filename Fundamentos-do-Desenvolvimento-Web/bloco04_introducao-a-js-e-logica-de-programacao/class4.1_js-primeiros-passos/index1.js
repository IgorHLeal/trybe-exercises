const a = 10;
const b = 15;

console.log("Soma: " + (a + b));
console.log("subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));





function tiposDeOperacoes (adicao, subtracao, multiplicacao, divisao, modulo) {
    if(adicao) {
        return a + b;
    } else if(subtracao) {
        return a - b;
    } else if(multiplicacao) {
        return a * b;
    } else if(divisao) {
        return a / b;
    } else if(modulo) {
        a % b;
    }
}
