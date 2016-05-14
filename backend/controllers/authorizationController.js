'use strict';
var strava = require('strava-v3');
var rp = require('request-promise');

module.exports = {
  login: function (req, res) {
    var requestAccessURL = strava.oauth.getRequestAccessURL({ scope: 'view_private' });
    res.json({uri: requestAccessURL});
  },
  loginCallback: function (req, res, next) {
    var clientId = process.env.STRAVA_CLIENT_ID;
    var clientSecret = process.env.STRAVA_CLIENT_SECRET;
    var code = req.query.code;
    var options = {
      method: 'POST',
      url: 'https://www.strava.com/oauth/token',
      json: {
        'client_id': clientId,
        'client_secret': clientSecret,
        'code': code
      }
    };
    rp(options)
      .then(function (result) {
        res.json(result);
      });
  }
};
