
const result = (my ,number) => my === number;

const numberSort = (number, callback) => {
    let drownNumber =  Math.floor(Math.random() * 5) + 1;
    
    return callback(number, drownNumber) ? 'Tente novamente' : 'Parabéns você ganhou';
}


console.log(numberSort(1, result));

// ---------- Referências ----------
// Math.floor(Math.random()): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random