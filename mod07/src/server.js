const express = require('express');
const nunjucks =  require('nunjucks');
const server = express(); // express se toronou uma função
const routes = require('./routes'); // importa a constante routes
const methodOverride = require('method-override');

server.use(express.urlencoded({ extendend: true }));
server.use(express.static('public')); // serve os arquivos estáticos
server.use(methodOverride('_method'));
server.use(routes);

server.set("view engine", "njk"); // seta qual o motor de view

nunjucks.configure("src/app/views", {
    express: server, // fala que vai usar o expresse e qual variável simbolizará ele
    autoescape: false,
    nocache: true,
    watch: true
});

server.listen(5000, function() { // 5000 é a porta. A função será executada assim que passar pelo listen
    console.log("Server is running!");
});