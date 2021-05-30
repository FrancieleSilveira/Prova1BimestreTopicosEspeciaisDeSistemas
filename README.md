<h1>Criação e configuração de um projeto Node.js com TypeScript</h1>

* `npm init -y`
*Descrição:* Criar um projeto em Node.js. O argumento -y ignora todas as perguntas sobre as informações do projeto, que podem ser alteradas no arquivo package.json.

Comando: npm install express
Descrição: Comando para instalar qualquer biblioteca/módulo/pacote dentro da aplicação. Neste caso estamos instalando a biblioteca do express. Qualquer biblioteca pode ser achada no repositório do NPM.

Comando: npm install mongoose
 
*Comando: npm install typescript -g
Descrição: Comando para instalar qualquer biblioteca/módulo/pacote dentro da aplicação. Neste caso estamos instalando a biblioteca do typescript. O argumento -g instala a biblioteca de forma global na máquina.
 
Comando: tsc --init
Descrição: Inicializar o typescript dentro do projeto.
 
*Comando: npm install ts-node-dev -g
Descrição: Comando para instalar qualquer biblioteca/módulo/pacote dentro da aplicação. Neste caso estamos instalando a biblioteca do ts-node-dev. O argumento -g instala a biblioteca de forma global na máquina.
 
Comando: npm install @types/express -D
Descrição: Comando para instalar qualquer arquivo de declaração de tipos da biblioteca escolhida, dentro da aplicação. O argumento -D instala a biblioteca como dependência de desenvolvimento.

Comando: npm install @types/mongoose -D
 
Acrescentar: "dev": "ts-node-dev --transpile-only --ignore-watch node_modules ./src/server"
Na parte “scripts”  do package.json

*Comando: ts-node-dev --transpile-only --ignore-watch node_modules ./src/server.ts
Descrição: O comando vai transpilar e executar a aplicação que contém código em typescript para javascript.
 
Comando: npm run dev
Descrição: Este comando executa o script configurado no arquivo package.json.
 
Comando: Set-ExecutionPolicy unrestricted
Descrição: Caso aconteça algum erro ao executar o comando tsc –init, você deve executar este comando no Power Shell como administrador.

Criar: novo arquivo src/server.ts , com isso sera vriada uma pasta src com um arquivo server.ts dentro
