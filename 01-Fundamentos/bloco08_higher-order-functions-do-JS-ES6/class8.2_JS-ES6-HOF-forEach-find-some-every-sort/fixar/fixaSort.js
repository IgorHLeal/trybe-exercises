const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
const arrayOrder = (element) => element.sort((age1, age2) => age1.age - age2.age);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
const arrayOrderDecrescente = (element) => element.sort((age1, age2) => age2.age - age1.age);

console.log(arrayOrder(people));
console.log(arrayOrderDecrescente(people));