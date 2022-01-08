function createStates(){
    let states = document.querySelector('#state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < stateOptions.length; index += 1){
        let option = document.createElement('option');
        option.innerText = stateOptions[index];
        option.value = stateOptions[index];
        states.appendChild(option);
    }
}

let inputs = {
    name: {
        maxLength: 40,
        required: true,
    },
    email: {
        maxLength: 50,
        required: true,
    },
    cpf: {
        maxLength: 11,
        required: true,
    },
    address: {
        maxLength: 200,
        required: true,
    },
    city: {
        maxLength: 28,
        required: true,
    },
    state: {
        type: 'select',
        required: true,
    },
    residence: {
        type: 'radio',
        required: true,
    },
    resume: {
        maxLength: 1000,
        required: true,
    },
    cargo: {
        maxLength: 40,
        required: true,
    },
    descriptionCargo: {
        maxLength: 500,
        required: true,
    },
    data: {
        type: 'data',
        required: true,
    },
}

function defaultValidation(input, name){
    
    let trimmed = input.value.trim(); 
    let validation = inputs[name];

    if (validation.required && trimmed.length === 0){
        return false;
    }
    if (validation.maxLength && trimmed.length > validation.maxLength){
        return false;
    }

    return true;
}

function dateValidation (input, name){
    if (input.value.length === 0){
        return {
            message: 'A data não foi preenchida!'
        };
    }

    let formatDate = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if (!formatDate.test(input.value)){
        return {
            message: 'Data: Formato inválido'
        };
    }

    let splitted = input.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];

    if (day < 0 || day > 30){
        return {
            message: 'Dia inválido'
        };
    } else if (month < 0 || month > 12){
        return {
            message: 'Mês inválido'
        };
    } else if (year < 0){
        return {
            message: 'Ano inválido'
        };
    } else {
        return true;
    }
}

function getSelectedOption(select){
    return select.options[select.selectedIndex];
}



/* function sumbmition (event) {
    event.preventDefault();

} */

window.onload = function() {
    createStates();

    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', sumbmition);

    let clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clearFields);
}

// Referências:

/* 1 - trim() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto; */

/* 2 - test() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
O método test() executa uma busca por uma correspondência entre  uma expressão regular e uma string. Retorna true ou false.
Use test() sempre que você quiser saber se um padrão está dentro de uma string; */

/* 3 - split() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método. */

/* 4 - option() - https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLOptionElement/Option 
A coleção de opções retorna uma coleção de todos os elementos <option> em uma lista suspensa. */

/* 5 - selectedOptions() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
O HTMLSelectElement.selectedIndexé um longque reflete o índice do primeiro ou último <option>elemento selecionado , dependendo do valor de multiple. O valor -1indica que nenhum elemento está selecionado. */