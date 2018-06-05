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

function allRoute(req, res) {
  Plant
    .find()
    .populate('creator')
    .exec()
    .then(plants => {
      plants.forEach(plant => plant.daysUntilWatering());
      res.render('plants/all', {plants});
    });
}

function showRoute(req, res) {
  Plant
    .findById(req.params.id)
    .populate('creator')
    .populate('comments.commenter')
    .exec()
    .then(plant => {
      plant.daysUntilWatering();
      res.render('plants/show', {plant});
    });
}

function newRoute(req, res) {
  res.render('plants/new');
}

function createRoute(req, res) {
  const plantData = req.body;
  plantData['image'] = req.file.location;
  plantData['fileMetadata'] = req.file;
  plantData['creator'] = res.locals.currentUser.id;
  Plant
    .create(req.body)
    .then(plant => {
      plant.lastWatered();
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
      if(req.file) {
        req.body['image'] = req.file.location;
      }
      Object.assign(plant, req.body);
      return plant.save();
    })
    .then(() => res.redirect(`/plants/${req.params.id}`));
}

function wateredRoute(req, res) {
  Plant
    .findById(req.params.id)
    .exec()
    .then((plant) => {
      plant.lastWatered();
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
  const commenter = req.body;
  commenter['commenter'] = res.locals.currentUser.id;
  Plant
    .findById(req.params.id)
    .then(plant => {
      plant.comments.push(req.body);
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
  all: allRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  watered: wateredRoute,
  commentCreate: createCommentRoute,
  commentDelete: commentDeleteRoute
};
