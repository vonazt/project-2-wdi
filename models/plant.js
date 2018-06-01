const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  plantName: String,
  plantSpecies: String,
  date: new Date,
  wateringSchedule: Number,
  sunlightRequired: Number,
  image: String
});

module.exports = mongoose.model('Plant', plantSchema);

//
// plant name
// plant type
// date added
// needs watering every x days
// light required
// image
