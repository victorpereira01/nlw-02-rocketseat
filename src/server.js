const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } = require('./pages')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))
    .use(express.urlencoded({ extended: true }))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .get("/success", pageSuccess)
    .post("/save-classes", saveClasses)
    .listen(5000);


    //  DESAFIO 02 ---> COrreção de bugs
    // nao permitir o usuario colocar um novo campode dia e horario, se o dia e hora anterior estiver vazio **
    // funcionalidade de deletar um campo de dia e hora