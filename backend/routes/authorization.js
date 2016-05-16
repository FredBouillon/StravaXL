'use strict';
var authorizationController = require('../controllers/authorizationController');

module.exports = function(app) {

  app.get('/api/auth/strava/', authorizationController.login);
  app.get('/api/auth/strava/token', authorizationController.loginCallback);
  app.get('/api/auth/strava/deauthorize', authorizationController.deauthorize);

  return require('express').Router();
};
