# O que é Git? Qual a diferença para GitHub, GitLab e BitBucket?

### GIT
    
O Git é um sistema de versionamento de código distribuído, criado por Linus Torvalds.
 
Ele guarda alterações feitas no arquivo através dos commits, o conjunto de commits cria um
histórico de alterações feitas ao longo da vida útil do arquivo.
Através desse histórico conseguimos acessar versões anteriores do código.
    
Os controles de versão antigos eram feitos no modo cliente-servidor, onde o código estava no servidor e o acesso era feito pelo cliente. Para se fazer uma alteração era necessário bloquear o arquivo, isso impedia o acesso de outras pessoas.
    
O Git ajuda no fluxo de trabalho, pois permite que várias pessoas trabalhem no mesmo projeto ao mesmo tempo.
    
### GITHUB, GITLAB E BITBUCKET
    
São plataformas que guardam repositórios e trabalhos feitos no Git.
Nessas plataformas o repositório pode ficar visível para outras pessoas, e dessa forma, elas possam colaborar com o seu projeto.
    
Essas plataformas também possuem algumas funcionalidades que ajudam no fluxo de desenvolvimento.
    

### PULL REQUESTS

É o pedido para que o repositório original (Remoto), ou uma branch do repositório original, faça a ação de pull (puxar) as atualizações e mudanças feitas localmente ou de um branch do próprio repositório.

### BRANCH E MERGE 

Branch: É uma versão independente e editável de um código.
Branch Master: É a parte principal do código, a "oficial" onde ele fica consolidado; ela também é editável.
    
É possível sobrescrever as branches, onde uma será independente da outra e para meclá-las é usado o MERGE.
    

### Autenticação - Como funciona a conexão entre local e remoto?

Autenticar é enviar comandos do Git (workspace local) para o GitHub (workspace remoto) e ao mesmo tempo proteger as informações pessoais.
Ao fazer a autenticação você "diz" ao GitHub para usar as credenciais da sua conta e que você é quem diz ser.

Existem duas formas de acessar o GitHub pelo termina:

1° - SSH (Secure Shell) - É um protocolo de chave criptografada que permite enviar dados de forma segura em redes inseguras. Usando o SSH você tem acesso ao GitHub sem ter que digitar seu nome e senha em cada comando executado.

2° - HTTPS (Hypertext Transfer Protocol Secure) - É uma extenso do HTTP e usa certificados digitais para autenticar dados e permitir que eles sejam criptografados de forma segura.