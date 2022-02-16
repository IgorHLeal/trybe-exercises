## Dia 8.5

Neste dia aprendi sobre sete features do ES6 que são muito úteis na hora de desenvolver uma aplicação:

    - spread operator;
    
    - parâmetro rest;
    
    - object destructuring;
    
    - array destructuring;
    
    - default destructuring;
    
    - abbreviation object literal;
    
    - default params;


### Exercícios

1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .

    - Dica: use spread operator. 

2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
    
    - Dica: use parâmetro rest.

3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

    - Dica: use object destructuring.

4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

    - Dica: use object destructuring.

5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

    - Dica: use array destructuring.

6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

    - Dica: use array destructuring e abbreviation object literal.

7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

    - Dica: use object destructuring.

8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

    - Dica: use default params.

9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.

    - Dica: use object destructuring e spread operator.

    - OBS: As estações do ano aqui descritas têm base nas estações do hemisfério norte.
