'use strict';
var authorizationController = require('../controllers/authorizationController');

module.exports = function(app) {

  app.get('/api/auth/strava/', authorizationController.login);
  app.get('/api/auth/strava/token', authorizationController.loginCallback);

  return require('express').Router();
};
