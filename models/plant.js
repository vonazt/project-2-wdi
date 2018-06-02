const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  species: String,
  datePlanted: Date,
  wateringSchedule: Number,
  soilShouldBe: String,
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
