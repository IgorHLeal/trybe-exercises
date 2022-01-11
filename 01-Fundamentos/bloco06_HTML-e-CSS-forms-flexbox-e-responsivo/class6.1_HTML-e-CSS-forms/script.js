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

    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if (!regex.test(input.value)){
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

function selectValidation(select, name){
    let option = getSelectedOption(select);
    let validation = inputs[name];

    if (validation.required && (!option || option.disabled)){
        return false;
    }

    return true;
}

function radioValidation(radio, name){
    let checked = document.querySelector('[name=${name}]:checked');

    if (checked === null){
        return false;
    }

    return true;
}

let validationStrategies = {
    default: defaultValidation,
    date: dateValidation,
    select: selectValidation,
    radio: radioValidation,
}

function validateInput(inputName){
    let inputType = inputs[inputName].type;
    let input = document.querySelector(`[name=${inputName}]`);

    if (inputType){
        let validationFunction = validationStrategies[inputType];
        return validationFunction(input, inputName);
    }

    return validationStrategies.default(input, inputName);
}

function renderErrorMessages(messages){
    let form = document.querySelector('#form-cv');
    let messageDiv = document.createElement('div');
    messageDiv.className = 'error';
    form.prepend(messageDiv);

    for (let message of messages){
        let p = document.createElement('p');
        p.innerText = message;

        messageDiv.appendChild(p);
    }
}

function defaulRendering(input){
    let p = document.createElement('p');
    let name = input.getAttribute('name');
    let checked = document.querySelector(`[name=${name}]:checked`);

    if (checked){
        p.innerText = checked.value;
    }

    return p;
}

function selectRendering(input){
    let p = document.createElement('p');
    let option = getSelectedOption(input);
    p.innerText = option.value;

    return p;
}

let renderStrategies = {
    default: defaultRendering,
    radio: radioRendering,
    select: selectRendering,
}



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

/* 6 - regex: https://medium.com/cwi-software/e-o-regex-como-vai-657f94388dc */

/* 7 - prepend: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend */

/* 8 - `[name=${name}]:checked`: https://pt.stackoverflow.com/questions/320143/como-obter-o-valor-de-um-input-usando-o-atributo-name-javascript */

