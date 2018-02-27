const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Model = require('./../database/models/details')


let app = express();

mongoose.connect('mongodb://localhost/meetup_details');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/details', function(req,res) {
  Model.Details.find({})
    .limit(1)
    .select('details -_id')
    .then(function(data){
      res.send(data);
    })
})

module.exports = app

