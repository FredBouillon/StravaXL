import React from 'react';
import { connect } from 'react-redux';
import * as activitiesActions from '../actionCreators/activitiesActions';
import * as oauthUtils from '../utils/oauth';

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
        <div>{this.props.activities.ride ? this.props.activities.ride.length : 'Loading...'}</div>
      </div>
    );
  }
}

ActivitiesContainer.propTypes = {
  activities: React.PropTypes.object, //eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  activities: state.activities,
});

export default connect(
  mapStateToProps
)(ActivitiesContainer);
