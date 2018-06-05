const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  name: String,
  images: []
});

module.exports = mongoose.model('Gallery', gallerySchema);
