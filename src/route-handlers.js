const routeHandlers = {};

routeHandlers.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

routeHandlers.user = (req, res) => {
  res.render('user', {
    title: 'User',
    user: 'Mr Express'
  })
}

routeHandlers.logout = (req, res) => {
  res.redirect('/');
};


module.exports = routeHandlers;
