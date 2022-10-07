# Entendendo os comandos

### Instalação e configuração do Git

- *`sudo apt-get install git-all`  —  instala o Git na máquina.*

- *`git config - - global user . name "seu nome"`  —  configura o Git com seu nome;*

- *`git config - - global user . email "seu email"`  —  configura o Git com o seu email;*

- *`git config - - global core . editor "code - - wait"`  —  define VS Code como editor principal (para abrir o arquivo no VS Code é só digitar o comando: .gitconfig);*

- *`git - - version`  —  verifica a versão do Git instalada;*

- *`git config - - lista`  —  Mostra nome e email salvos;*

- *`ssh-keygen -t rsa -b 4096 -C "seu email"`  —  Gera uma chave ssh;*

### No terminal... 

**Sequência de comandos para clonar um repositório:**

- `git clone` "link do repositório"  —  Mais do que baixar o código atual, o ***Git*** recebe uma cópia de quase todos os dados que o servidor possui. Cada versão de cada arquivo no histórico do projeto é obtida quando você roda o comando `git clone`. (Fazer o clone para uma outra pasta que ainda não foi utilizada).
    - Após clonar uma vez não é necessário clonar outra vez, é somente usar o `git pull`.
    - Após clonar, criar uma nova branch para fazer alterações;
    - origin  —  apelido para o repositório remoto;

- `git branch "nome"` —  cria uma nova branch;

- `git chekout "nome da branch"`  —  muda a branch;

- `git chekout -b "nome da branch"`  —  Cria a nova branch e já muda pra ela;

- `code .`  —  abre o arquivo no VS Code. (Após alterar, salvar);

- `git status`  —  mostra arquivos modificados;

- `git add .`  —  coloca tudo na área de staged;

- `git commit -m "mensagem"`  —  pega as alterações e deixa tudo pronto para enviar para o repositório.
    - `git commit -am` "mensagem"  —  é um atalho para fazer `git add.` e `git commit-m` ao mesmo tempo, faz as duas coisas juntas.


- `git remote -v`  —  Mostra o endereço do repositório remoto;

- `git push -u origin` "nome da nova branch"  —  envia para o repositório remoto;



**Fazer o Pull Request**:
 
- `git fetch`  —  Pesquisa se tem alterações no repositório remoto

- `git pull`  —  Traz atualizações para o repositório local
 

**No GitHub...** 

- Pull Request  —  Pedido de alteração, faz um merge (mesclagem) com todas as informações;



## Outros comandos muito importantes

- `ls .git` (Realizar esse comando na raiz do repositório) - lista os arquivos .git;

- `git init` - Inicia o git dentro do repositório local;

- `git merge "nome do arquivo"`- Faz a mesclagem de todas as alterações;

- `git branch -O "nome da branch"` - Apaga a branch;

- `code .gitconfig` ou `code .` - Abre no VS Code;

- `git config` - Mostra opções de configurações do Git;

- `git log` - Mostra o histórico de commites feitos;

**Para ressuscitar arquivos:**

- `git log --diff-filter=D --sumary` - Traz o histórico com arquivos deletados;

- Copiar os 4 primeiros números do commit do arquivo deletado

- `git checkut "n° do commit" N1 "nome do arquivo"` - 

- `git status`

- `git add "nome do arquivo"`

- `git commit -m "mensagem"`


**Para ignorar arquivos que não serão adicionados ao git: (site: total gitignore.io)**

- `touch .gitignore` - Cria a pasta (O "." significa que são arquivos ocultos);

- `git status` - Mostra as alterações feitas;

- `cat > .gitignore ENTER` - Adicionar arquivos a serem ignorados;

- `git status` - Mostra as alterações feitas;

- `git add .gitignore` - Coloca  na área de staged;

- `git commit -m "mensagem"`- Deixa os arquivos prontos a serem enviados;

- `cat >> .gitignore ENTER "nome do diretório"/` - Acrescenta um diretório;


**Alguns outros comandos:**

- `ping "domínio"`

- `traceroute` ou `tracepath` - Mostra o caminho e rotas de servidores;

- `ns lookup "endereço"` - Informa nome e IP do endereço digitado;