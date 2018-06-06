const Gallery = require('../models/gallery');

function showRoute(req, res) {
  Gallery
    .find()
    .populate('gallery')
    .then(gallery => {
      res.render('gallery/show', {gallery});
    });
}

function createRoute(req, res) {
  const pictureData = {
    name: req.body.name,
    image: req.file.location,
    fileMetadata: req.file
  };
  Gallery
    .findById(req.params.id)
    .exec()
    .then((gallery) => {
      gallery.images.push(pictureData);
      gallery.save();
    })
    .then(() => res.redirect(`/gallery/${req.params.id}`));
}

module.exports = {
  show: showRoute,
  create: createRoute
};
