## Dia 8.3

Neste dia aprendi sobre outras duas Higher Order Functions: Array.map e o Array.filter.
A função map é, talvez, uma das mais poderosas (e complexas!) funções para manipulação e criação de arrays. Em conjunto, essas HOFs deixarão o código mais legível, conciso e expressivo.

Com o conteúdo de hoje, é possível:

    - Utilizar a função Array.map para manipular e construir arrays;
    
    - Utilizar a função Array.filter para filtrar um array;
    
    - Aprender a usar de forma conjunta as Higher Order Functions;


### Exercícios 

1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;

    - Dica: Use a função map;

2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade `author`, com o nome da pessoa autora do livro, e uma propriedade `age` com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado;

    - Dica: use as funções map, sort;

3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia;

    - Dica: use a função filter;

4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho;

    - Dica: use as funções filter e sort;

5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia;

6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação;

7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais;

    - Dica: cada inicial termina com um ponto;