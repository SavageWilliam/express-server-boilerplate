const Express = require('express');
const Path = require('path');

const router = require('./router.js');

const server = Express();

//tell express to server static files, and where from
server.use(Express.static(Path.join(__dirname, '../public')));

//registers our router
server.use(router);

module.exports = server;
