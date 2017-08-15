var env = require('node-env-file');
var express = require('express');
var fileUpload = require('express-fileupload');
var container = require('./container');

env(__dirname + '/../.env');

var app = express();
app.use(fileUpload());

app.get('/', container.HomePageAction());
app.post('/api/file-sizes', container.ObtainFileSize());

var listener = app.listen(process.env.PORT || 4200, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
