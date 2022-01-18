No dia de hoje aprendi sobre:

    - Utilizar funções de diferentes formas;
    
    - Reutilizar lógicas de códigos;
    
    - Aplicar o conceito de Higher Order Functions.


### Exercícios 

 *1 - Crie uma função que retorne um objeto no formato `{ nomeCompleto, email }` representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF `newEmployees` para criar cada pessoa contratada em seu respectivo `id`. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato `nome_da_pessoa@trybe.com`.*

 *2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").*

*3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.*
   
    - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


### Exercícios bônus - Parte 1 / Game Actions Simulator

*1 - Crie uma função que retorna o dano do dragão.*
    
    - O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo `strength` (dano máximo).

*2 - Crie uma função que retorna o dano causado pelo `warrior`.*

    - O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

*3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.*

    - O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

    - A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.


### Bônus / Parte 2

*1 - Crie a primeira HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do personagem `warrior`. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem `warrior` e atualizará os `healthPoints` do monstro `dragon`. Além disto ela também deve atualizar o valor da chave `damage` do `warrior`.*

*2 - Crie a segunda HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do personagem `mage`. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem `mage` e atualizará os `healthPoints` do monstro `dragon`. Além disto ela também deve atualizar o valor das chaves `damage` e `mana` do mage.*

*3 - Crie a terceira HOF que compõe o objeto `gameActions`. Ela será a função que simula o turno do monstro `dragon`. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro `dragon` e atualizará os `healthPoints` dos personagens `mage` e `warrior`. Além disto ela também deve atualizar o valor da chave `damage` do monstro.*

*4 - Adicione ao objeto `gameActions` uma função que retorne o objeto `battleMembers` atualizado e faça um `console.log` para visualizar o resultado final do turno.*
