var mongoose = require('mongoose');
var data = require('./database/seed_data/data.json');
var photodata = require('./database/seed_data/mock_photo_data.json');
var Model = require('./database//models/details.js');

mongoose.connect('mongodb://localhost/meetup_details');

var len = photodata.length;

var output = []
data.events.forEach(function(event){
  var i = 0;
  var rand = Math.floor(Math.random() * 6); 
  var pics = [];
  var temp = {};
  temp.id = event.id;
  temp.details = event.description;
  temp.photos = [];
  while (i < rand) {
    var currentPic = photodata[Math.floor(Math.random() * len)].pictures;
    if (pics.indexOf(currentPic) === -1) {
      temp.photos.push(photodata[Math.floor(Math.random() * len)].pictures);
      pics.push(currentPic);
    }
    i++;
  }
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
