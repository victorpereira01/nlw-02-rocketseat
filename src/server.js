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