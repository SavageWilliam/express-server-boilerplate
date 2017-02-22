const Express = require('express');
const Path = require('path');
var ExpHbs  = require('express-handlebars');

const router = require('./router.js');

const app = Express();

app.set('views', Path.join(__dirname, 'views'));

app.set('view engine', 'handlebars');

const options = {
  defaultLayout: 'main',
  layoutsDir: Path.join(__dirname, 'views/layout')
}

app.engine('handlebars', ExpHbs(options));

app.use(Express.static(Path.join(__dirname, '../public')));

app.use(router);

module.exports = app;
