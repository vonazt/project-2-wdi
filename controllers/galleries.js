const Gallery = require('../models/gallery');

function showRoute(req, res) {
  Gallery
    .find()
    .then(gallery => {
      res.render('gallery/show', {gallery});
    });
}

module.exports = {
  show: showRoute
};
