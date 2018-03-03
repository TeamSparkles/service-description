const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Model = require('./../database/models/details')


let app = express();

mongoose.connect('mongodb://localhost/meetup_details');

app.use('/event/:eventid/details', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/api/event/:eventid', function(req,res) {
  const eventId = `${req.params.eventid}`;
  Model.Details.findOne({id:eventId})
    .select('-_id')
    .then(function(data){
      res.send(data);
    })
})

module.exports = app

