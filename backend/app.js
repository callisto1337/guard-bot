const express = require('express');
const app = express();
require('./middlewares/headers')(app);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
});
