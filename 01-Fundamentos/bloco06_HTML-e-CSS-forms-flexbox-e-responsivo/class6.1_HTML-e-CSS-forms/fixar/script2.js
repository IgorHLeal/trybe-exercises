// SELETORES
const inputText = document.querySelector('#input-text');
const inputCheckbox = document.querySelector('#input-checkbox');
const hrefLink = document.querySelector('#href');

hrefLink.addEventListener('click', (hrefEvent) => {
    hrefEvent.preventDefault();
});

inputCheckbox.addEventListener('click', (inputCheck) => {
    inputCheck.preventDefault();
});

inputText.addEventListener('click', (textEvent) => {
    const character = textEvent.key;
    if (character !== 'a') {
        textEvent.preventDefault();
    }
});