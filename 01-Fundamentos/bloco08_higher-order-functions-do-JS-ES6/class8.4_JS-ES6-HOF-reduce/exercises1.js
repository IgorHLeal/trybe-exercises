const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (newArray) => newArray.reduce((acc, element) => `${acc} ${element}`);

console.log(flatten(arrays));