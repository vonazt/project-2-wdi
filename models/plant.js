const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const plantSchema = new mongoose.Schema({
  name: String,
  species: String,
  datePlanted: Date,
  wateringSchedule: Number,
  soilShouldBe: String,
  sunlightRequired: String,
  careTips: String,
  image: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema]
});

plantSchema.methods.formattedDatePlanted = function(page) {
  return page === 'edit' ? this.datePlanted.toISOString().slice(0,10) : this.datePlanted.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
};

module.exports = mongoose.model('Plant', plantSchema);
