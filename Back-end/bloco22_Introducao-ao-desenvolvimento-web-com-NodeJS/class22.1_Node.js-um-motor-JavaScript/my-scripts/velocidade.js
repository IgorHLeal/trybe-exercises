const readline = require('readline-sync');

const caulculoVelocidadeMedia = (distancia, tempo) => {
  console.log(`Distância: ${distancia}, Tempo: ${tempo}`);

  const media = distancia / tempo;

  return media;
}

const main = () => {
  const distancia = readline.questionInt('Qual a distância percorrida em metros? ')
  const tempo = readline.questionInt('Qual o tempo gasto em segundos? ')

  const media = caulculoVelocidadeMedia(distancia, tempo);

  console.log(`Velocidade média: ${media.toFixed(2)} m/s`);
}

main();