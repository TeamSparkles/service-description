const app = require('./index.js')

let port = 4000;

app.listen((process.env.PORT || port), function() {
  console.log(`listening on port ${port}`);
});