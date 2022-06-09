const readline = require('readline-sync');

const calculoImc = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaMetro = altura / 100;
  const alturaAoQuadrado = alturaMetro ** 2;

  const imc = peso / alturaAoQuadrado;

  return imc;
}

const main = () => {
  const peso = readline.questionFloat('Qual o seu peso em kg? ')
  const altura = readline.questionInt('Qual a sua altura em cm? ')

  const imc = calculoImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magresa).');
    return;
  }
   
  if(imc >= 18.5 && imc <= 24.9) {
    console.log('Situação: Peso normal.');
    return;
  }

  if(imc >= 25.0 && imc <= 29.9) {
    console.log('Situação: Acima do peso(sobrepeso)');
    return;
  }

  if(imc >= 30.0 && imc <= 34.9) {
    console.log('Situação: Obesidade grau I');
    return; 
  }

  if(imc >= 35.0 && imc <= 39.9) {
    console.log('Situação: Obesidade grau II');
    return;  
  }

  console.log('Situação: Obesidade graus III e IV');

}

main();