// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma);

// Exeercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
let media = soma / numbers.length;

console.log(media);
// Exercício 4
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor que 20");
}

// Exercício 5
let numbers = [5, 9, 3, 19, 70, 80, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

// Exercício 6
let numbers = [5, 9, 3, 19, 70, 80, 100, 2, 35, 27];
let numerosImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares += 1;
  }
}

if (numerosImpares === 0) {
  console.log("Nenhum valor ímpar encontrado.");
} else {
  console.log(numerosImpares);
}

// Exercício 7
let numbers = [5, 9, 3, 19, 70, 80, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}
console.log(menorNumero);

// Exercícios 8 e 9
let numeros = [];

for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}
console.log(numeros);

for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2);
}

// BÔNUS 1
let numbers = [5, 9, 3, 19, 70, 80, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let sIndex = 0; sIndex < index; sIndex += 1) {
        if (numbers[index] < numbers[sIndex]) {
            let posicao = numbers[index];
            // Continuar desenvolvendo...
        }
    }
}