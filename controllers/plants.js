const Plant = require('../models/plant');


function indexRoute(req, res) {
  Plant
    .find()
    .populate('creator')
    .exec()
    .then(plants => {
      res.render('plants/index', {plants});
    });
}

function showRoute(req, res) {
  Plant
    .findById(req.params.id)
    .populate('creator')
    .exec()
    .then(plant => {
      res.render('plants/show', {plant});
    });
}

function newRoute(req, res) {
  res.render('plants/new');
}

function createRoute(req, res) {
  const plantData = req.body;
  plantData['creator'] = res.locals.user.id;
  Plant
    .create(req.body)
    .then(plant => {
      return res.redirect(`/plants/${plant.id}`);
    });
}

function editRoute(req, res) {
  Plant
    .findById(req.params.id)
    .exec()
    .then(plant => {
      res.render('plants/edit', {plant});
    });
}

function updateRoute(req, res) {
  Plant
    .findById(req.params.id)
    .exec()
    .then((plant) => {
      Object.assign(plant, req.body);
      return plant.save();
    })
    .then(() => res.redirect(`/plants/${req.params.id}`));
}

function deleteRoute(req, res) {
  Plant
    .findById(req.params.id)
    .then(plant => {
      plant.remove();
      return res.redirect('/plants');
    });
}

function createCommentRoute(req, res, next) {
  Plant
    .findById(req.params.id)
    .then(plant => {
      plant.comments.push(req.body);
      console.log(plant.comments);
      return plant.save();
    })
    .then(plant => res.redirect(`/plants/${plant.id}`))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Plant
    .findById(req.params.id)
    .then(plant => {
      const comment = plant.comments.id(req.params.commentId);
      comment.remove();
      return plant.save();
    })
    .then(plant => res.redirect(`/plants/${plant.id}`))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: createCommentRoute,
  commentDelete: commentDeleteRoute
};
