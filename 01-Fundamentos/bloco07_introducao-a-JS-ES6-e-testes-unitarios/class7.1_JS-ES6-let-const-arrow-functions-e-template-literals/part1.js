/* ---------- EXERCÍCIO 1 ---------- */
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} 'ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  testingScope(true);

/* ---------- EXERCÍCIO 2 ---------- */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numberSort = array => {
    const sortOddsAndEvens = array.sort((a, b) => a -b);
    return sortOddsAndEvens;
}
const arrayOrder = numberSort(oddsAndEvens);
console.log(`Os números ${arrayOrder} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Esta forma de resolução foi feita de acordo com o gabarito
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram de forma ordenada`); */