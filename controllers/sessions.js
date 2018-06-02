const User = require('../models/user');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {
  User
    .findOne({ email: req.body.email })
    .then( (user) => {
      if (!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Unrecognised email or password' });
      }
      req.session.userId = user.id;
      res.redirect('/plants');
    });
}

function deleteRoute(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: newRoute,
  create: createRoute,
  delete: deleteRoute
};
