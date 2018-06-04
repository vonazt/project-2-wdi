const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const wateredSchema = new mongoose.Schema({
  lastWatered: Number,
  waterIn: Number
}, {
  timestamps: true
});

const plantSchema = new mongoose.Schema({
  name: String,
  species: String,
  datePlanted: Date,
  wateringSchedule: Number,
  watered: false,
  wateredTracker: [wateredSchema],
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
  if (this.watered) {
    const wateredOn  = new Date();
    this.wateredTracker.lastWatered = wateredOn.getTime();
    this.watered = false;
  }
};

plantSchema.methods.daysUntilWatering = function() {
  const today = new Date();
  console.log(this.wateredTracker.lastWatered);
  console.log(today.getTime());
  console.log(this.watered);
  const daysUntilWater = today.getTime() - this.wateredTracker.lastWatered;
  console.log(daysUntilWater);
};



module.exports = mongoose.model('Plant', plantSchema);
