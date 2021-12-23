// Exemplo 1
let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
    console.log(cars[key]);
}


// Exemplo 2
let car = {
    type: 'Fiat',
    model: 500,
    color: 'white'
}

for (let index in car) {
    console.log(index, car[index]);
}


// Para fixar 1
let names = {
    person1: 'João',
    person2: 'Marta',
    person3: 'Jorge'
}

for (let index in names) {
    console.log("Olá " + names[index]);
}


// Para fixar 2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

  for (let tipos in car) {
      console.log(tipos + ": " + car[tipos]);
  }