const User = require('../models/user');

function showRoute(req, res) {
  User
    .findById(req.params.id)
    .populate('plants')
    .exec()
    .then(user => {
      res.render('users/show', {user});
    });
}

module.exports = {
  show: showRoute
};
