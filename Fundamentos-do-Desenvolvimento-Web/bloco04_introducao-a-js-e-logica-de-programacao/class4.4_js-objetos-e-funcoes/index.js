// PARTE 1

// Exercício 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
}

console.log('Bem-vinda, ' + info.personagem);

// Exercício 2
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
}

info.recorrente = 'Sim';

console.log(info);

// Exercício 3
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
}

for (let saida in info) {
    console.log(saida);
}

// Exercícios 4
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
}

for (let saida in info) {
    console.log(info[saida]);
}

// Exercícios 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
}

info.personagem = 'Margarida e Tio Patinhas';
info.origem = 'Pato Donald e Christmas on Bear Mountain, Dells Four COlor Comics #178';
info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas';
info.recorrente = 'Ambos recorrentes // Atenção para essa última linha!';

for (let saida in info) {
    console.log(info[saida]);
}

// Exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia De Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas'
        }
    ]
}

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// Exercício 7
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia De Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas'
        }
    ]
}
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco'
    }
)
console.log(leitor);

// Exercício 8
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia De Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas'
        }
    ]
}
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco'
    }
)


// PARTE 2