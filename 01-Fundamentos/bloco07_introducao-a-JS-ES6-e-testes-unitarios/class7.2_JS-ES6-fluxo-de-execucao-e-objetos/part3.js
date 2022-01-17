const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Exercício 1
const turnoNoite = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
turnoNoite(lesson2, 'turno', 'noite');
console.log(lesson2);

// Exercício 2
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson1));

// Exercício 3
const objectLength = (object) => Object.keys(object).length;
console.log(objectLength(lesson2));

// Exercício 4
const values = (object) => Object.values(object);
console.log(values(lesson3));

// Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });


console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// Exercício 6
const totalStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);

  for (let index = 0; index < keys.length; index += 1) {
    const current = keys[index];
    total += object[current].numeroEstudantes;
  }
  return total;
}
console.log(totalStudents(allLessons));


// Exercício 7
const getValueByNumber = (object, position) => Object.values(object)[position];
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Exercício 8
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false