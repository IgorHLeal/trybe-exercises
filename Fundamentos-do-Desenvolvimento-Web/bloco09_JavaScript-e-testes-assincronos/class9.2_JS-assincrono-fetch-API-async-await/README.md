## Exercícios 

1. Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! Como? Vamos praticar!

    - Primeiro, veja o manual da API do site [icanhazdadjoke.com](https://icanhazdadjoke.com/api). 
    Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho;
        

    - Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros:
    
        - O endereço para o qual a requisição será feita, ou seja, a url do serviço.

        - Um objeto contendo as especificações da requisição. Para essa API,
        atribuiremos a esse objeto as chaves method e headers;

        - A partir do fetch , troque o console.log() anterior pelo método .json()
        e imprima os dados da requisição.
        Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

