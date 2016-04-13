var express = require('express');
var cors = require('cors');
var path = require('path');
var webpack = require('webpack');
var strava = require('strava-v3');
var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

app.use(cors());

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:8080');
  });

app.get('/api/athlete', function(req, res, next) {
  strava.athlete.get({},function(err,payload) {
    if(!err) {
      console.log(payload);
    }
    else {
      console.log(err);
    }
  });
});





if (isDevelopment) {
  var config = require('./../webpack.config.js');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}
