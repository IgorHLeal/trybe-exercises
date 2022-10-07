/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName() */

// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 function mudancaText() {
    const mudanca = document.getElementsByTagName('p')[1];
    mudanca.innerHTML = "Me imagino em um emprego na área da tecnologia ganhando acima do valor mínimo da Trybe.";
}
mudancaText();


/* Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). */
 function colorExternal() {
     const colorExt = document.getElementsByClassName ('main-content')[0];
     colorExt.style.background = "green";
 }
 colorExternal();


// Crie uma função que mude a cor do quadrado vermelho para branco.
 function colorInternal() {
    const colorInt = document.getElementsByClassName ('center-content')[0];
    colorInt.style.background = "white";
 }
 colorInternal();


// Crie uma função que corrija o texto da tag <h1>.
 function textTag() {
     const text = document.getElementsByTagName('h1')[0];
     text.innerHTML = "Exercício 5.1 - JavaScript";
 }
 textTag();


// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function textDoc() {
    const text = document.getElementsByTagName('p')[0];
    text.innerHTML = text.innerText.toUpperCase();
}
textDoc();


// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function textConsole() {
    const textoNoConsole = document.getElementsByTagName('p');
    for (index = 0; index < textoNoConsole.length; index += 1){
        console.log(textoNoConsole[index].innerText);
    }
}    
textConsole();
