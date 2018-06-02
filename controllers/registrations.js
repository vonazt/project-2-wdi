const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then(user => res.redirect('/'));
}

module.exports = {
  new: newRoute,
  create: createRoute
};
