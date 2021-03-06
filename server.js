var express = require('express');
var cors = require('cors');
var path = require('path');
var webpack = require('webpack');
var app = express();
var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');
require('dotenv').config();
app.use(express.static(static_path));
app.use(cors());

var athleteRoute = require('./backend/routes/athlete.js')(app);
app.use('/athlete', athleteRoute);

var activitiesRoute = require('./backend/routes/activities.js')(app);
app.use('/athlete/activities', activitiesRoute);

var authorizationRoute = require('./backend/routes/authorization.js')(app);
app.use('/authorization', authorizationRoute);

app.all('/*', function (req, res) {
  res.sendFile('/index.html', {
    root: static_path
  });
}).listen(process.env.PORT || 8080, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8080');
});

if (isDevelopment) {
  var config = require('./webpack.config.js');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': 'http://localhost:8080/'
    },
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:3000');
  });
}