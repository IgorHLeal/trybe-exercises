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
// Criar um objeto com todos os inputs para ser usado nas validações
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

// Validação Padrão
function defaultValidation(input, name){
    
    // Remover espaços em branco no início e fim da string;
    let trimmed = input.value.trim(); 
    
    // Inserir em uma variável (validation) o valor a ser acessado no objeto "inputs" criado acima usando o parâmetro name como busca por chave;
    let validation = inputs[name];

    // Verificar se um campo obrigatório está vazio ou não, checando se o valor na chave "required" dentro de "validation" é true e  se o número de caracteres é 0;
    if (validation.required && trimmed.length === 0){
        return false;
    }
    // Verificar se o comprimento da string é maior que o permitido;
    if (validation.maxLength && trimmed.length > validation.maxLength){
        return false;
    }

    return true;
}


// Validação da data
function dateValidation (input, name){

    // Verifica se a data tem ao menos um caracter ou não. Se não tiver, retornamos um objeto com a chave "message", que vai ter uma string explicitando que a data não foi preenchida;
    if (input.value.length === 0){
        return {
            message: 'A data não foi preenchida!'
        };
    }

    // Usa expressão regular (regex) para validar se a data está de acordo com o que foi pedido;
    //  Definimos uma expressão regular abrindo duas barras invertidas;
    //  ^ : Configura o texto para ignorar quebras de linhas antes de qualqer caracter que digitarmos;
    // \d : Representa que aquele campo deve ser preenchido com um número entre 0 e 9,999;
    // / : Separa os campos de dia, mês e ano;
    // $ : Sinaliza que nosso input não aceita quebras de linha dali em diante;

    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    // Fazer um if que vai usar o regex e executar a função test, que vai nos retornar true ou false de acordo com o conteúdo da string do argumento que for passado.
    // ! : Operador de negação; Se o regex não estiver dentro dos padrões, a negação vai transformá-lo em true, entrar na condição e retornar uma mensagem de erro;
    if (!regex.test(input.value)){
        return {
            message: 'Data: Formato inválido'
        };
    }

    // Caso o regex passe por fora do if, ele vai ser um array com 3 elementos dentro dele, que é a data do nosso input mas separada por "/". Isso vai acontecer graças a função split, que retorna um array cujos elementos são separados a cada vez que a string encontrar um caractere específico.
    let splitted = input.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];


    // verificar os valores de cada um dos elementos do array:
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


// Validação dos selects
function getSelectedOption(select){
    return select.options[select.selectedIndex];
}

function selectValidation(select, name){
    //  Pegar a option selecionada;
    let option = getSelectedOption(select);
    // Captar a chave que contém informações sobre a validação do input de selects;
    let validation = inputs[name];

    // Se a opção for obrigatória e a opção selecionada estiver desabilitada ou não existir, a função vai retornar false;
    if (validation.required && (!option || option.disabled)){
        return false;
    }

    // Se a informação passar por essa validação intacta, retorna true;
    return true;
}

function radioValidation(radio, name){
    
    // Capta o atributo checked do primeiro radio que tem o mesmo name passado por argumento nessa função;
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


// Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro.
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

function defaultRendering(input){
    let p = document.createElement('p');
    let name = input.getAttribute('name');
    let checked = document.querySelector(`[name=${name}]:checked`);

    if (checked){
        p.innerText = checked.value;
    }

    return p;
}


function radioRendering(input){
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


function renderData(){
    let dataDiv = document.createElement('div');
    dataDiv.className = 'data';

    let form = document.querySelector('#form-cv');
    form.prepend(dataDiv);


    for (let name in inputs){
        let input = document.querySelector(`[name=${name}]`);
        let inputType = inputs[name].type;

        let element;

        if (renderStrategies[inputType]){
            element = renderStrategies[inputType](input, dataDiv);
        } else {
            element = renderStrategies.default(input, dataDiv);
        }

        dataDiv.appendChild(element);
    }
}


function validateData(){
    let validationsList = {};

    for (let inputName in inputs){
        let isValid = validateInput(inputName);
        validationsList[inputName] = isValid;
    }

    let count = 0;
    let messages = [];

    for (let index in validationsList){
        if (validationsList[index] === false){
            count += 1;
        }

        if (validationsList[index].message){
            count += 1;
            messages.push(validationsList[index].message);
        }
    }

    return {
        errorQtd: count,
        messages,
    }
}


function clearDivs(){
    let errorDivs = document.querySelectorAll('.error');

    for (let div of errorDivs){
        div.remove();
    }

    let dataDiv = document.querySelector('.data');

    if (dataDiv){
        dataDiv.remove();
    }
}


function handleSubmit(event){
    event.preventDefault();

    let validation = validateData();

    clearDivs();

    if (validation.errorQtd === 0){
        renderData();
    } else {
        validation.messages.unshift('Dados Inválidos');

        renderErrorMessages(validation.messages);
    }
}


function clearFields(){
    let formElements = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');
    let div = document.querySelectorAll('.div-curriculum');

    for (let index = 0; index < formElements.length && index < div.length; index += 1){

        let userInput = formElements[index];
        userInput.value = '';
        textArea.value = '';
        div[index].innerText = '';
    }
}



window.onload = function() {
    createStates();

    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click',handleSubmit);

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

/* 7 - prepend: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend 
Insere um conjunto de Nodeobjetos ou DOMStringobjetos antes do primeiro filho do Element.*/

/* 8 - `[name=${name}]:checked`: https://pt.stackoverflow.com/questions/320143/como-obter-o-valor-de-um-input-usando-o-atributo-name-javascript */

