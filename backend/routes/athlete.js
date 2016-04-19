'use strict';
var athleteController = require('../controllers/athleteController');

module.exports = function(app) {

  app.get('/api/athlete/', athleteController.get);

  return require('express').Router();
};
