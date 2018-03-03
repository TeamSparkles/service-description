const mongoose = require('mongoose');

const detailsSchema = mongoose.Schema({
  id: { type: String, unique: true },
  details: String,
  photos: [String],

});

const Details = mongoose.model('details', detailsSchema);

module.exports.Details = Details;
