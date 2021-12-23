console.log(usuario['id']);
console.log(usuario.email);

console.log(usuario.infoPessoal.endereco.rua);
console.log(usuario['infoPessoal']['endereco']['cidade']); 




let moradores = [
    {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
]

let primeiroMorador = moradores[0];
console.log(primeiroMorador);
console.log(primeiroMorador['andar']);

let ultimoMorador = moradores[moradores.length -1];
console.log(ultimoMorador);
console.log(ultimoMorador.nome); 




let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log("A jogadora " + player.name + ' ' + player.lastName + ' ' + "tem " + player.age + " anos de idade");

player['fullName'] = player.name + ' ' + player.lastName;

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por 6 vezes: " + player.bestInTheWorld);

console.log("A jogadora possui " + player['medals']['golden'] + " medalhas de ouro e " + player['medals']['silver'] + " de prata");