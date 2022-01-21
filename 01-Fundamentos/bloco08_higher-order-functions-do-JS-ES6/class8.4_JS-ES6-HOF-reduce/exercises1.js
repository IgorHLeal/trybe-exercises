const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (newArray) => newArray.reduce((acc, element) => acc.concat(element));

console.log(flatten(arrays));

// ---------- Referências ----------
// .concat(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat