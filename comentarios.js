/* JAVASCRIPT 

- console.log printa as coisas na tela
   - const é uma variavel que não é possivel alterar o valor
   - var para declarar variaveis
   - require para puxar um arquivo de outra pasta ou código/frameworks/app
   - set
   - get definir rotas
   - params permitir que o usuário insira parâmetros
   - ?params pode inserir parâmetros, mas não obrigatório
   - req,res vem junto com get, sendo requisição e resposta
   - render vem do ejs que permite o html ser renderizado, se usa no lugar do send
   - listen para abrir um servidor 
   - forEach para cada produto dentro ele irá executar uma função
   - module.exports para exportar algo  
   - order [] você estabelece uma regra de ordenação
*/

/*
    Html 
    %- para poder utilizar js e codigos ejs
    <title> Título da página
    <h1><h2> e por diante são o tamanho dos caracteres
    <hr> para dar espaçamento entre as linhas, é uma linha
    <p> paragrafos para as linhas não ficarem uma em cima da outra
    <%= %> usado com o EJS para permitir exibir váriaveis no html
    <br> Quebra as linhas
    <button> para inserir um botão
    <nav> Barra de navegação
*/

//O QUE SÃO ARRAYS?

// O Bootstrap é um estilizador de páginas, ele facilita demais o trabalho de criação
/* Sobre o bootstrap e suas funções
- Container - centraliza todo conteúdo dentro dele
- Em class, tem o form-control que personaliza um placeholder de acordo com o boostrap
- Label - Uma tag que descreve o que aquele campo faz
- Classe de botão - btn btn success/primary/danger/warning que deixa mais bonito
- navbar define a barra, navbar-light define a cor dela, bg-light/dark a cor do texto nela
*/

/* EXPRESS

 O Framework express nos ajuda a criar uma plataforma nodejs, e tem diversas ferramentas uteis. Primeiro
importamos aonde está salvo e o colocamos em uma variável, require("express"),e para utilizarmos suas funções,
definimos outra variavel, const app = express();
    O express tem uma biblioteca que se chama bodyParses, ele é um decodificador, usamos ele para pegar dados
inseridos em uma url, importamos ele assim, require("body-parser"). Para utilizarmos suas funções, fazemos o seguinte
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); */

/*  SEQUELIZE

Framework de banco de dados sequelize, ele permite você programar sem precisar utilizar sintaxe sql,
ele faz todo o trabalho, para se conectar se faz um arquivo a parte só pra database, lá declaramos a variável
com o require, após isso para utilizar a função criamos uma nova conexão. 
Ex = const connection = new Sequelize('projetoperguntas','root','estudioso',{
    host: 'localhost',
    dialect: 'mysql'
});
*/