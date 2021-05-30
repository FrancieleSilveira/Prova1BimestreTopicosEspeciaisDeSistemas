<h1>Criação e configuração de um projeto Node.js com TypeScript</h1>

* `npm init -y`

     **Descrição:** Cria um projeto em Node.js. O argumento -y ignora todas as perguntas sobre as informações do projeto, que podem ser alteradas no arquivo package.json.
<br>

* `npm install express`

     **Descrição:** Instala a biblioteca do express.
<br>

* `npm install mongoose`

     **Descrição:** Instala a biblioteca do mongoose.
<br>
 
* `npm install typescript -g`

     **Descrição:** Instala a biblioteca do typescript. O argumento -g instala a biblioteca de forma global na máquina, portanto **só precisa ser executado no primeiro projeto**
<br>
 
* `tsc --init`

    **Descrição:** Inicializa o typescript dentro do projeto.
<br>
 
* `npm install ts-node-dev -g`
 
    **Descrição:** Instala a biblioteca do ts-node-dev. O argumento -g instala a biblioteca de forma global na máquina, portanto **só precisa ser executado no primeiro projeto**
<br>
 
* `npm install @types/express -D`

    **Descrição:** Instala arquivo de declaração de tipos da biblioteca express, dentro da aplicação. O argumento -D instala a biblioteca como dependência de desenvolvimento.
<br>

* `npm install @types/mongoose -D`
 
    **Descrição:** Instala arquivo de declaração de tipos da biblioteca mongoose, dentro da aplicação. O argumento -D instala a biblioteca como dependência de desenvolvimento.
<br>

<h3>IMPORTANTE</h3>

* Acrescentar: 

                //"dev": "ts-node-dev --transpile-only --ignore-watch node_modules ./src/server" 
                
                na parte “scripts”  do package.json
<br>

* Criar: novo **arquivo** *src/server.ts* , com isso sera criada uma **pasta** *src* com um **arquivo** *server.ts* dentro
<br>
<h2>Para testar se está rodando como deveria</h2>

* Escreva dentro do arquivo *Server.ts* : //console.clear();
console.log("Testando a configuração de ambiente");//

* `npm run dev`

    **Descrição:** Executa o script configurado no arquivo package.json, roda a aplicação.


