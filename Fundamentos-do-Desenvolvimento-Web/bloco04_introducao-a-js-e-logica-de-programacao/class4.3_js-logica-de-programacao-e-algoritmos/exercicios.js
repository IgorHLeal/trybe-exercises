// Exerício 1
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// Exercício 2
let word = "estrogonoficamente";
let reverseWord = "";

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// Exercício 3
let array = ["java", "javascript", "python", "html", "css"];
let biggestWord = [0];
let smallWord = [0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallWord.length) {
    smallWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallWord);

// Exercício 4
let highestNumberPrime = 0;

for (let index = 0; index <= 50; index += 1) {
    let primo = true;
    for (let divisor = 2; divisor < index; divisor += 1) {
        if (index % divisor === 0) {
            primo = false;
    }
  }
  if (primo) {
      highestNumberPrime = index;
  }
}
console.log(highestNumberPrime);
