const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then((user) => {
      req.session.userId = user.id;
      return res.redirect('/');
    })
    .catch((err) => {
      return res.status(401).render('registrations/new', {message: `${err}`});
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
