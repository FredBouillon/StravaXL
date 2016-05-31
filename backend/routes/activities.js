'use strict';
var activitiesController = require('../controllers/activitiesController');

module.exports = function(app) {

  app.get('/api/athlete/activities', activitiesController.get);

  return require('express').Router();
};
