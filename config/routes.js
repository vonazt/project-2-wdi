const express = require('express');
const router = express.Router();

const statics = require('../controllers/statics');
const plants = require('../controllers/plants');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.route('/')
  .get(statics.index);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/plants')
  .get(plants.index)
  .post(plants.create);
router.route('/plants/new')
  .get(plants.new);
router.route('/plants/:id')
  .get(plants.show)
  .put(plants.update)
  .delete(plants.delete);
router.route('/plants/:id/edit')
  .get(plants.edit);


module.exports = router;
