const express = require('express');
const router = express.Router();

const statics = require('../controllers/statics');
const plants = require('../controllers/plants');

router.route('/')
  .get(statics.index);

router.route('/plants')
  .get(plants.index);


module.exports = router;
