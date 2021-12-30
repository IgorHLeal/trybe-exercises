// PARTE 1
// 1 - Acesse o elemento `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// 2 - Acesse pai a partir de `elementoOndeVoceEsta` e adicione uma color a ele.
const dadElement= elementoOndeVoceEsta.parentElement;
dadElement.style.color = 'green';

// 3 - Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstSonOfTheSon= elementoOndeVoceEsta.firstElementChild;
firstSonOfTheSon.innerText = 'Este é o primeiro filho do filho.';

// 4 - Acesse o `primeiroFilho` a partir de pai.
const firstSon = dadElement.firstElementChild;

// 5 - Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta`.
const firstSonSecond = elementoOndeVoceEsta.previousElementSibling;

// 6 - Agora acesse o texto `Atenção!` a partir de `elementoOndeVoceEsta`.
const text = elementoOndeVoceEsta.nextSibling;

// 7 - Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta`.
const thirdChild = elementoOndeVoceEsta.nextElementSibling;

// 8 - Agora acesse o `terceiroFilho` a partir de pai .
const thirdChildThird = dadElement.lastElementChild.previousElementSibling;


//PARTE 2 
// Crie um irmão para elementoOndeVoceEsta.


// Crie um filho para elementoOndeVoceEsta.


// Crie um filho para primeiroFilhoDoFilho.


// A partir desse filho criado, acesse terceiroFilho.



// PARTE 3 
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
