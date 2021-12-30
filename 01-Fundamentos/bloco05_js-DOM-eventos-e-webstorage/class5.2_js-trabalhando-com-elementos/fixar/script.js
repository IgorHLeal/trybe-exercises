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
const elementoPai = document.querySelector('#pai');
const siblingElementoOndeVoceEsta = document.createElement('section');
siblingElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
elementoPai.appendChild(siblingElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.
const currentElement = document.querySelector('#elementoOndeVoceEsta');
const childCurrentElement = document.createElement('section');
childCurrentElement.id = 'filhoElementoOndeVoceEsta';
currentElement.appendChild(childCurrentElement);

// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const childPrimeiroFilhoDoFilho = document.createElement('section');
childPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDofilho';
primeiroFilhoDoFilho.appendChild(childPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
const thirdChild = childPrimeiroFilhoDoFilho.parentNode.parentNode.nextElementSibling;


// PARTE 3 
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
