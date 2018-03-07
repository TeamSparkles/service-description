const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Model = require('./../database/models/details');


const app = express();

mongoose.connect('mongodb://localhost/meetup_details');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/event/:eventid/details', express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/api/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;
  Model.Details.findOne({ id: eventId })
    .select('-_id')
    .then((data) => {
      res.send(data);
    });
});

module.exports = app;

