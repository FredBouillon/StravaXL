'use strict';
var authorizationController = require('../controllers/authorizationController');

module.exports = function(app) {

  app.get('/api/auth/strava/', authorizationController.get);
  app.get('/api/auth/strava/callback', authorizationController.callback);

  return require('express').Router();
};
