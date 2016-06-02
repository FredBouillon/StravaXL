import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as athleteActions from '../actionCreators/athleteActions';
import * as oauthApi from '../api/oauth';
import * as oauthUtils from '../utils/oauth';
import { browserHistory } from 'react-router';
import stravaButton from '../../assets/ConnectWithStrava.png';

class HomeContainer extends Component {
  componentDidMount() {
    if ((!this.props.athlete || !this.props.athlete.firstname) && oauthUtils.getAccessToken()) {
      this.props.getAthlete(oauthUtils.getAccessToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (oauthUtils.getAccessToken() && nextProps.athlete && nextProps.athlete.firstname) {
      browserHistory.push('/summary');
    }
  }

  _onLoginClick() {
    this.props.login();
  }

  render() {
    return (
      <div>
        <h1>{'Welcome to StravaXL'}</h1>
        <img
          src={stravaButton}
          onClick={() => this._onLoginClick()}
          style={{ cursor: 'pointer' }}
          alt=""
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  athlete: React.PropTypes.object,
  getAthlete: React.PropTypes.func,
  login: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  athlete: state.athlete,
});

const mapDispatchToProps = () => ({
  login: () => {
    oauthApi.login()
      .then((response) => {
        window.location = response.data.uri;
      })
      .catch((error) => {
        console.log('authorization result error', error); //eslint-disable-line
      });
  },
  getAthlete: (accessToken) => {
    athleteActions.fetchAthlete(accessToken);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
