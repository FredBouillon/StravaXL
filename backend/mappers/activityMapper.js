var _ = require('lodash');

module.exports = {
  mapRides: function(activities) {
    return _.filter(activities, function(activity) {
      return activity.type === 'Ride';
    });
  }
};