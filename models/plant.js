const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  species: String,
  datePlanted: String,
  wateringSchedule: Number,
  soilShouldBe: String,
  sunlightRequired: String,
  careTips: String,
  image: String
});

module.exports = mongoose.model('Plant', plantSchema);
