import React from 'react';
import { connect } from 'react-redux';
import * as athleteActions from '../actionCreators/athleteActions';
import * as oauthApi from '../api/oauth';
import * as oauthUtils from '../utils/oauth';
import { browserHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';

class OAuthContainer extends React.Component {
  componentWillMount() {
    const code = oauthUtils.getQueryParamByName(location.href, 'code');
    this.props.getAccessToken(code);
  }

  render() {
    return (
      <div className="valign-wrapper">
        <CircularProgress className="valign" />
        <div>{'Loading'}</div>
      </div>
    );
  }
}

OAuthContainer.propTypes = {
  getAccessToken: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getAccessToken: (code) => {
    oauthApi.getAccessToken(code)
      .then((response) => {
        oauthUtils.setAccessToken(response.data.access_token);
        dispatch(athleteActions.setAthlete(response.data.athlete));
        browserHistory.push('/');
      })
      .catch((error) => {
        console.log('error', error); //eslint-disable-line
      });
  },
});

export default connect(
  null,
  mapDispatchToProps
)(OAuthContainer);
