var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello this is test for Node Js App');
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001');
});
