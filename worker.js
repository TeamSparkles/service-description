var mongoose = require('mongoose');
var data = require('./database/seed_data/data.json');
var photodata = require('./database/seed_data/mock_photo_data.json');
var Model = require('./database//models/details.js');

mongoose.connect('mongodb://localhost/meetup_details');

//add six generic filler photos to an array;
var photos = [];
for (var i = 0; i < photodata.length; i+= 6) {
  photos.push([photodata[i].pictures, photodata[i+1].pictures, photodata[i+2].pictures, photodata[i+3].pictures, photodata[i+4].pictures, photodata[i+5].pictures])
}

//iterate through meetup api data, create new object with description, ids, and photo array of 6 images from earlier;
var output = []
data.events.forEach(function(event){
  var temp = {};
  temp.id = event.id;
  temp.details = event.description;
  temp.photos = photos.shift();
  output.push(temp);
});

//iterate through each recently created obj, and save it to database;
var counter = output.length;

output.forEach(function(entry) {
  counter--;
  var singleEntry = new Model.Details(entry);
  singleEntry.save(function(err) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log('added one entry in the database')
      if (counter === 0) {
        mongoose.disconnect();
      }
    }
  })
})
