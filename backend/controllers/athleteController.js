'use strict';
var strava = require('strava-v3');

module.exports = {
  get: function (req, res/*, next*/) {
    strava.athlete.get({ 'access_token': req.headers.authorization }, function (err, payload) {
      if (!err) {
        res.json(payload);
      }
      else {
        res.json(err);
      }
    });
  }
};
