const Plant = require('../models/plant');


function indexRoute(req, res) {
  Plant
    .find()
    .exec()
    .then( plants => {
      res.render('plants/index', {plants});
    });
}


module.exports = {
  index: indexRoute
};
