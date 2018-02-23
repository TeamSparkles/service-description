const mongoose = require('mongoose');

let detailsSchema = mongoose.Schema({
  id: {type: String, unique: true},
  details: String,
  photos: [String]

});

let Details = mongoose.model('details', detailsSchema);

module.exports.Details = Details;