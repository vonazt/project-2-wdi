const User = require('../models/user');

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then( (user) => {
      if (!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Unrecognised email or password' });
      }
      req.session.userId = user.id;
      res.redirect('/');
    });
}
