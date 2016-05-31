import React from 'react';
import { connect } from 'react-redux';
import * as activitiesActions from '../actionCreators/activitiesActions';
import * as oauthUtils from '../utils/oauth';
import axios from 'axios';


class ActivitiesContainer extends React.Component {
  componentDidMount() {
    this.props.getActivities(oauthUtils.getAccessToken());
  }
  
  render() {
    return (
      <div>
        <div>{'Activities'}</div>
      </div>
    );
  }
}

ActivitiesContainer.propTypes = {
  getActivities: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    //athlete: state.athlete
  };
};

const mapDispatchToProps = () => {
  return {
    getActivities: (accessToken) => {
      console.log('fetch activities');
      //activitiesActions.fetchActivities(accessToken);
      axios.get(window.location.origin + '/api/athlete/activities')
      .then(function () {
        console.log('suc');
      })
      .catch(function() {
        console.log('err');
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesContainer);