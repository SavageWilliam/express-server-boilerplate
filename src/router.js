const Router = require('express').Router();
const routeHandlers = require('./route-handlers');

// middleware that is specific to this router
Router.use(timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next();
})

Router.get('/', routeHandlers.home)
Router.get('/user', routeHandlers.user);
Router.get('/logout', routeHandlers.logout);

module.exports = Router;
