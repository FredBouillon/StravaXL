import React from 'react';
import { connect } from 'react-redux';
import * as activitiesActions from '../actionCreators/activitiesActions';
import * as oauthUtils from '../utils/oauth';
import { getActivityCount, getTotalDistance, getTotalElevation } from '../selectors/activities';

class ActivitiesContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      activitiesActions.fetchActivities(oauthUtils.getAccessToken())
    );
  }

  render() {
    return (
      <div>
        <div>{'Activities'}</div>
        {/* <div>{this.props.activities.ride ?
          this.props.activities.ride.length : 'Loading...'}</div>*/}
        <div>{`Activity count: ${this.props.activityStats.activityCount || 'Loading...'}`}</div>
        <div>{`Total distance: ${this.props.activityStats.totalDistance || 'Loading...'}`}</div>
        <div>{`Total elevation: ${this.props.activityStats.totalElevation || 'Loading...'}`}</div>
      </div>
    );
  }
}

ActivitiesContainer.propTypes = {
  activityStats: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  activityStats: {
    activityCount: getActivityCount(state),
    totalDistance: getTotalDistance(state),
    totalElevation: getTotalElevation(state),
  },
});

export default connect(
  mapStateToProps
)(ActivitiesContainer);
