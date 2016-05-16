import React from 'react';
import { connect } from 'react-redux';
import * as athleteActions from '../actionCreators/athleteActions';
import * as oauthApi from '../api/oauth';
import * as oauthUtils from '../utils/oauth';
import { browserHistory } from 'react-router';

class OAuthContainer extends React.Component {
  componentWillMount() {
    const code = oauthUtils.getQueryParamByName(location.href, 'code');
    this.props.getAccessToken(code);
  }

  render() {
    return (
      <div>
        <div>{'Loading'}</div>
      </div>
    );
  }
}

OAuthContainer.propTypes = {
  getAccessToken: React.PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAccessToken: (code) => {
      oauthApi.getAccessToken(code)
        .then((response) => {
          oauthUtils.setAccessToken(response.data.access_token);
          dispatch(athleteActions.setAthlete(response.data.athlete));
          browserHistory.push('/');
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OAuthContainer);