import { createSelector } from 'reselect';

const getRideActivities = (state) => state.activities.ride;

export const getDistinctYears = createSelector(
  [getRideActivities],
  (rideActivities) => {
    const years = [];
    if (rideActivities) {
      rideActivities.forEach((activity) => {
        const year = new Date(activity.start_date).getUTCFullYear();
        if (years[years.length - 1] !== year) {
          years.push(year);
        }
      });
    }
    return years;
  }
);

export const getActivityCount = createSelector(
  [getRideActivities],
  (rideActivities) => {
    if (rideActivities) {
      return rideActivities.length;
    }
    return 0;
  }
);

export const getTotalDistance = createSelector(
  [getRideActivities],
  (rideActivities) => {
    let totalDistance = 0;
    if (rideActivities) {
      rideActivities.forEach((activity) => {
        totalDistance += activity.distance;
      });
    }
    return (totalDistance / 1000).toFixed(1);
  }
);

export const getTotalElevation = createSelector(
  [getRideActivities],
  (rideActivities) => {
    let totalElevation = 0;
    if (rideActivities) {
      rideActivities.forEach((activity) => {
        totalElevation += activity.total_elevation_gain;
      });
    }
    return (totalElevation / 1000).toFixed(1);
  }
);

export const getActivityStats = (state) => ({
  activityCount: getActivityCount(state),
  totalDistance: getTotalDistance(state),
  totalElevation: getTotalElevation(state),
});
