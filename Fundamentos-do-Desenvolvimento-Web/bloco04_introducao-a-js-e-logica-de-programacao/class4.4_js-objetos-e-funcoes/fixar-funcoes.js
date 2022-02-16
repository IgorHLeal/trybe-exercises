// Para fixar 1
let nome = '';

function bomDiaTryber(nome) {
    console.log('Bom dia, ' + nome);
}

bomDiaTryber('Igor');




// Para fixar 2
function bomDia() {
    return 'Bom dia!';
}

console.log(bomDia());




// Para fixar 3
let status = 'deslogado';

function logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado';
    }
}

console.log(status);

logarDeslogar();
console.log(status);

logarDeslogar();
console.log(status);

console.log('O usuário está ' + status);




// Para fixar 4
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 5));




// Para fixar 5
function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
        return segundoNum + ' é maior que ' + primeiroNum;
    } else {
        return 'Os números são iguais';
    }
}

console.log(maiorNum(10, 21));
console.log(maiorNum(10.3, 10.2));
console.log(maiorNum(10002345, 10873665));