# Dia 3.1

HTML - Hyper Text Markup Language (Linguagem de marcação de texto);
       O HTML não é uma linguagem de programação;

     - Ele é o esqueleto da página. É através do HTML que se cria a estrutura de como a página vai ser exibida, definindo quais tags servirão para títulos, subtítulos, parágrafos, e outros conteúdos ricos comolinks, imagens, vídeos etc.

- Observações: Utilizar a extensão `Live Server` no Vs Code para visualização da página web;



**Principais tags, estrutura básica**

- `<!DOCTYPE html>`
    - DOCTYPE - Indica ao navegador qual documento irá ser executado;
    - html - Será usado o HTML5;

- `<html lang="pt-br>` - Tag html, raiz da página;
- `</html>` - Fechamento do tag;


- `<head>` - Início da tag; Contém as configurações da página;
    - `<meta charset="UTF-8>`
        - "charset" - conjunto de caracteres;
        - "UTF-8" - conjunto de caracteres para a língua portuguesa; 

    - `<title>Aprendendo HTML</title>` - Título da página, nome do site;

    - Qual o caminho para o CSS;
    - Qual o caminho para algum script;
    - etc.
- `</head>` - Fechamento da tag head;


- `<body>` - Corpo da página; Contém todas as tags da parte visual da página;
    - `<h1>Título</h1>` - `<h1>` = tamanho da fonte;

    - `<h2>Subtítulo</h2>` - `<h2>` = fonte menor que h1;

    - `<p>Descrição e conteúdo</p>` - `<p>` = tag para um parágrafo;
                                    - `</p>` = fechamento do parágrafo;
-`</body>` - Fechamento do body;



**Tags para destacar textos**

- `<br>` ou `</br>` - Clocada entre textos e parágrafos para quebra de linhas;
                    - Podem ser usadas várias em sequência;
                    - Não é preciso fechar essa tag;

- `<strong>` - Dá ênfase a alguma informação (coloca em negrito);
- `</strong>` - Ao final da informação, fechamento;

- `<em>` - Coloca uma informação em itálico;
- `</em>` - Fechamento;

- `<hr>` - Cria uma barra de divisão no site; Não precisa de fechamento;



**Para criar uma lista**

- `<ul>` - Lista não ordenada
    - `<li>` - Item da lista - `</li>` - Fechamento 
- `</ul>` - Fechamento da lista;


- `<ol>` - Lista com números;
- `</ol>` - Fechamento da lista;



**Para inserir imagens**

- `<img src = "link da imagem" alt="descrição da imagem" whidth="lagura.px">` 



**Para inserir links externos e internos**

- `<a> Texto </a>` - Textto simples;

- `<a href="link externo" target="_blank">Título do link</a>` - Insere link externo;
    - "href" = referência ao link;
    - "target" = abre em outra aba;

- `a href="#Título">Título</a>` - Insere link interno
- `<p id="Título">Conteúdo do que será refenciado</p>` - Conteúdo que será referenciado;



**Colocar o portifólio no GitHub pages**

- Criar um repositório público;
- Colocar `username.github.io` como nome do repositório



## O contéudo e exercícios desse dia foram sobre:

* *O que é HTML;*
* *Estruturar páginas web com HTML utilizando as tags html , head e body;*
* *Utilizar o HTML para estruturar textos e títulos;*
* *Utilizar o HTML para criar listas, links e adicionar imagens;*

### Exercícios - Parte 01

Para fixar

* *1 - Crie um arquivo chamado `index.html`.*
* *2 - Crie uma lista das pessoas que você já fez amizade na Trybe.*
* *3 - Adicione uma imagem que venha de uma URL externa.*
* *4 - Adicione uma imagem que está no seu computador, local.*

### Parte 2

* *1 - Crie um parágrafo para cada pessoa da sua lista.*
* *2 - Crie um link entre a sua lista e os parágrafos de pessoas.*
* *3 - Crie um link para a página do Google.*