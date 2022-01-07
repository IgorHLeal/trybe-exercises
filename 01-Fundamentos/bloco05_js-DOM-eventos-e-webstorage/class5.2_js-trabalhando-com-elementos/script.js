// 1 - Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
const elementH1 = document.createElement("h1");
elementH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementH1);

// 2 - Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
const elementMain = document.createElement("main");
elementMain.className = "main-content";
document.body.appendChild(elementMain);

// 3 - Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
const elementSectionCenter = document.createElement("section");
elementSectionCenter.className = "center-content";
elementMain.appenChild(elementSectionCenter);

// 4 - Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
const paragraph = document.createElement("p");
paragraph.innerText =
  "Estes exercícios são para fixação dos conceitos aprendidos durante a aula 5.2";
elementSectionCenter.appendChild(paragraph);

// 5 - Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
const elementSectionLeft = document.createElement("section");
elementSectionLeft.className = "left-content";
elementMain.appenChild(elementSectionLeft);

// 6 - Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
const elementSectionRight = document.createElement("section");
elementSectionRight.className = "right-content";
elementMain.appenChild(elementSectionRight);

// 7 - Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200 e classe small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
const elementImg = document.createElement("img");
elementImg.className = "small-image";
elementImg.src = "https://picsum.photos/200";
elementSectionLeft.appendChild(elementImg);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um, dois, três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
const elementUl = document.createElement("ul");
elementSectionRight.appenChild(elementUl);
const array = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];
// Usar o For/In pois ele pega o índice
for (let number in array) {
  const elementLi = document.createElement("li");
  elementLi.innerHTML = array[number];
  elementUl.appenChild(elementLi);
}

// 9 - Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
for (let index = 0; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Text' + index;
    elementMain.appendChild(elementH3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 1 - Adicione a classe `title` na tag `h1` criada;
const title = document.querySelector('h1');
title.className = 'title';

// 2 - Adicione a classe `description` nas 3 tags `h3` criadas;
const description = document.querySelector('h3');
for (let index = 0; index < 3; index += 1) {
    description[index].className = 'description';
}

// 3 - Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
const removeSectionLeft = document.querySelector('.left-content')[0];
elementMain.removeChild(removeSectionLeft);

// 4 - Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
const centerSectionRight = document.querySelector('.right-content')[0];
centerSectionRight.style.marginRight = 'auto';

// 5 - Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
const colorCenterContent = document.querySelector('.center-content')[0];
colorCenterContent.parentNode.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos (`nove` e `dez`) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();