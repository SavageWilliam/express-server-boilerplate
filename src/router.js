const Router = require('express').Router();
const controller = require('./controllers');

Router.get('/', controller.home)
Router.get('/user', controller.user);
Router.get('/logout', controller.logout);

module.exports = Router;
