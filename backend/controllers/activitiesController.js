'use strict';
// var strava = require('strava-v3');
var rp = require('request-promise');
var activityMapper = require('../mappers/activityMapper');

module.exports = {
  get: function(req, res/*, next*/) {
    var options = {
      uri: 'https://www.strava.com/api/v3/athlete/activities',
      qs: {
        per_page: '200',
        before: (new Date() / 1000)
      },
      headers: {
        'Authorization': 'Bearer ' + req.headers.authorization
      },
      json: true
    };

    rp(options)
      .then(function(activities) {
        res.json({
          ride: activityMapper.mapRides(activities) 
        });
      })
      .catch(function(err) {
        // API call failed...

      });
  }
};