const controller = {};

controller.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

controller.user = (req, res) => {
   res.render('user')
 }

controller.logout = (req, res) => {
  res.redirect('/');
};

module.exports = controller;
