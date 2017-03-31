var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/product/*', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(express.static('dist'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});