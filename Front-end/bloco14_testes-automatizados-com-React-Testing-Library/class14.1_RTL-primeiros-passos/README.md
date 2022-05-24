# Dia 14.1 - Primeiros Passos em RTL

Neste dia aprendi sobre:

* *Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;*

* *Simular eventos com a React-Testing-Library em testes automatizados;*

* *Testar fluxos lógicos assíncronos com a React-Testing-Library;*

* *Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.*


---


## Exercícios

Para fixar esses conceitos, realizei 3 exercícios através de um Fork [Neste Link](https://github.com/tryber/exercise-todo-list):

### Exercício 1

Implemente os testes:

  - Necessário um botão para adicionar a tarefa.
  - Botão precisa conter o texto "Adicionar".
  - Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.

Pode adicionar mais testes que achar relevantes para verificar a funcionalidade desse botão.

-----

### Exercício 2

Teste a aplicação. Atenção ao que o teste orienta:

  - Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa.
  <br>
  Simule a adição de todas e depois verifique se elas estão aparecendo.

  - Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.

-----

### Exercício 3
Diferente dos outros, os testes já estão prontos, sendo necessário criar apenas as funcionalidades que eles testam.

  - Cada task adicionada deverá ter um botão ao lado dela com o texto "Selecionar";

  - Cada task adicionada deverá ter outro botão ao lado dela com o texto "Remover", esse botão deverá estar desabilitado;

  - Ao clicar no botão "Selecionar" de uma task, ela deverá habilitar o seu botão de "Remover";

  - Ao clicar no botão "Remover" a task deverá ser removida da tela;

  - Observe bem como os testes estão escritos, todos devem passar quando terminar a funcionalidade;