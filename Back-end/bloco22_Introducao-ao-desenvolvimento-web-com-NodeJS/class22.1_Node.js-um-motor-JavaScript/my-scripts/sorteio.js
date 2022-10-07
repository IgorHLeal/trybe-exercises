const readline = require('readline-sync');

const numeroAleatorio = (number, answer) => {
  if(number !== answer) {
    return console.log(`Opa, não foi dessa vez. O número era ${number}`);
  }
  
  return console.log('Parabéns, número correto!');
}

const main = () => {

  const randomNumber = Math.floor(Math.random() * 11);
  const answer = readline.questionInt('Digite um número entre 0 e 10 e tente acertar: ')

  numeroAleatorio(randomNumber, answer);

  const jogarNovamente = readline.question('Digite s para jogar novamente ou outra tecla para não: ');

  if (jogarNovamente !== 's') return console.log('Até a próxima"');

  main();
}

main();

// ---------------- Referência -------------
// Math.floor(Math.random()): https://www.w3schools.com/js/js_random.asp