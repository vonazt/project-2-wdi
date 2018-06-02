const Plant = require('../models/plant');


function indexRoute(req, res) {
  Plant
    .find()
    .exec()
    .then( plants => {
      res.render('plants/index', {plants});
    });
}

function showRoute(req, res) {
  Plant
    .findById(req.params.id)
    .exec()
    .then( plant => {
      res.render('plants/show', {plant});
    });
}

function newRoute(req, res) {
  res.render('plants/new');
}

function createRoute(req, res) {
  Plant
    .create(req.body)
    .then( plant => {
      return res.redirect(`/plants/${plant.id}`);
    });
}

function editRoute(req, res) {
  Plant
    .findById(req.params.id)
    .exec()
    .then( plant => {
      res.render('plants/edit', {plant});
    });
}

function updateRoute(req, res) {
  Plant
    .findById(req.params.id)
    .update(req.body)
    .then( plant => {
      return res.redirect(`/plants/${plant.id}`);
    });
}

function deleteRoute(req, res) {
  Plant
    .findById(req.params.id)
    .then( plant => {
      plant.remove();
      return res.redirect('/plants');
    });
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
