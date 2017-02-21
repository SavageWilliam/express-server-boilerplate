const Router = require('express').Router();

Router.get('/', (req, rep) => {
  reply.send('boilerplate');
})

module.exports = Router;
