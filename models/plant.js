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

plantSchema.methods.lastWatered = function() {
  const wateredOn  = new Date();
  console.log(this);
  this.wateredDate = wateredOn.getTime();
  console.log(this.wateredDate);
  console.log(this.wateredDate);
  this.save();
  console.log(this);
};

plantSchema.methods.daysUntilWatering = function() {
  const today = new Date();
  console.log(this.wateredDate);
  console.log(today.getTime());
  // console.log(this.watered);
  // console.log(daysUntilWater);
};



module.exports = mongoose.model('Plant', plantSchema);
