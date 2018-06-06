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
  wateredDate: Number,
  waterIn: Number,
  soilShouldBe: String,
  sunlightRequired: String,
  careTips: String,
  image: String,
  fileMetadata: Object,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema]
});

plantSchema.virtual('gallery', {
  ref: 'Plant',
  foreignField: 'plant',
  localField: '_id'
});

plantSchema.methods.formattedDatePlanted = function(page) {
  return page === 'edit' ? this.datePlanted.toISOString().slice(0,10) : this.datePlanted.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
};

plantSchema.methods.lastWatered = function() {
  const wateredOn  = new Date();
  this.wateredDate = wateredOn.getTime();
  this.save();
};

plantSchema.methods.daysUntilWatering = function() {
  const today = new Date();
  const todayInDays = today.getTime() / (60*60*24*1000);
  const daysSinceWatering = this.wateredDate / (60*60*24*1000);
  console.log((daysSinceWatering + this.wateringSchedule) - todayInDays);
  let daysLeft = Math.ceil((daysSinceWatering + this.wateringSchedule) - todayInDays);
  if (daysLeft < 0) daysLeft = 0;
  this.waterIn = daysLeft;
  if (daysLeft === 0) {
    return ' today!';
  } else if (daysLeft === 1) {
    return ' in 1 day';
  } else {
    return ` in ${daysLeft} days`;
  }
};

module.exports = mongoose.model('Plant', plantSchema);
