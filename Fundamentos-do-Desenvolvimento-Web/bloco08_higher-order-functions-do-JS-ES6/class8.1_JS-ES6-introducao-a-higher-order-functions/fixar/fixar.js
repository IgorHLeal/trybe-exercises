// Crie uma função que retorne a string 'Acordando!!'
const wakeUp = (string) => string;

//  Crie outra função que retorne a string 'Bora tomar café!!'
const haveBreakFast = (string2) => string2;

// Crie mais uma função que retorne a string 'Partiu dormir!!'
const toSleep = (string3) => string3;

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
const doingThings = (callback) => {
    const result = callback;
    console.log(result);
}

// Ao chamar a função doingThings:
doingThings(wakeUp('Acordando!!'));
doingThings(haveBreakFast('Bora tomar café!!'));
doingThings(toSleep('Partiu dormir!!'));
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!