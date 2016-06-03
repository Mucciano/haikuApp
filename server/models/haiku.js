var mongoose = require('mongoose');

var haikuSchema = mongoose.Schema({
  line1: { type: String },
  line2: { type: String },
  line3: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Haiku', haikuSchema);
