'use strict';
var strava = require('strava-v3');
var rp = require('request-promise');

module.exports = {
  get: function (req, res/*, next*/) {
    var requestAccessURL = strava.oauth.getRequestAccessURL({ scope: 'view_private' });
    console.log('auth url', requestAccessURL);
    res.redirect(requestAccessURL);
  },
  callback: function (req, res, next) {
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
        process.env.STRAVA_ACCESS_TOKEN = result.access_token;
        console.log(process.env.STRAVA_ACCESS_TOKEN);
        res.redirect('/');
      })
  }
};
