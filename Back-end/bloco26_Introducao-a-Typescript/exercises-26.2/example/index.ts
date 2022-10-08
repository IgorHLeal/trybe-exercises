// Arays
let names: string[] = ["Mary Joe", "Alan Joe"];
console.log(names);

// Tuplas
let fullName: [string, string] = ['Igor', 'Leal'];
console.log(fullName);

let person: [string, number] = ['Igor Leal', 26];
console.log(person);

console.log(' ');

// ----------------------------------------

// Type Aliases
// Exercício 1
type Bird = {
  wings: 2,
  beaks: 1,
  biped: true,
};

// Exercício 2
type Sum = {
  x: number,
  y: number,
};

function sumNumbers(sum: Sum) {
  return console.log(`A soma de x e y é: ${sum.x + sum.y}`);
}

sumNumbers({ x: 10, y: 15 });

console.log(' ');

// Exercício 3
type Adress = {
  road: string,
  number: number,
  district: string,
  city: string,
  state: string,
  country: string,
}

// ----------------------

// Type Unions
// Exercício 1
type StatesOfMatter = 'liquid' | 'solid' | 'gaseous';

// Exercício 2
type Cpf = number | string;

function returnCpf(cpf: Cpf) {
  console.log(`Seu cpf é: ${cpf}`);
}

returnCpf(12653592614);
returnCpf('126.535.926-14');

// Exercício 3
type OS = 'linux' | 'mac os' | 'windowns';

// Exercício 4
type Vogals = 'a' | 'e' | 'i' | 'o' | 'u';