const Express = require('express');
const Path = require('path');
var expHbs  = require('express-handlebars');

const router = require('./router.js');

const app = Express();

app.set('views', Path.join(__dirname, 'views'));

const options = {
  defaultLayout: 'main',
  layoutsDir: Path.join(__dirname, 'views/layout')
}

app.engine('handlebars', expHbs(options));

app.set('view engine', 'handlebars');

app.use(Express.static(Path.join(__dirname, '../public')));

//registers our router
app.use(router);

module.exports = app;
