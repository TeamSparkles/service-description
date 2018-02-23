const express = require('express');
var bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {

});

app.get('/repos', function (req, res) {

});

let port = 4000;

app.listen((process.env.PORT || port), function() {
  console.log(`listening on port ${port}`);
});

