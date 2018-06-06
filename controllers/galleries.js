// const Gallery = require('../models/gallery');
// const Plant = require('../models/plant');
//
// function showRoute(req, res) {
//   Gallery
//     .find()
//     .populate('plants')
//     .then(gallery => {
//       res.render('gallery/show', {gallery});
//     });
// }
//
// function createRoute(req, res) {
//   Gallery
//     .findById(req.params.id)
//     .exec()
//     .then((gallery) => {
//       Object.assign(gallery, req.body);
//       return gallery.save();
//     })
//     .then(() => res.redirect(`/gallery/${req.params.id}`));
// }
//
// module.exports = {
//   show: showRoute,
//   create: createRoute
// };
