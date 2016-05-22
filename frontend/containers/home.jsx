import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as athleteActions from '../actionCreators/athleteActions';
import * as athleteApi from '../api/athlete';
import * as oauthApi from '../api/oauth';
import * as oauthUtils from '../utils/oauth';
import { browserHistory } from 'react-router';

class HomeContainer extends Component {
  componentDidMount() {
    if ((!this.props.athlete || !this.props.athlete.firstname) && oauthUtils.getAccessToken()) {
      this.props.getAthlete(oauthUtils.getAccessToken());
    }
  }

  _onLoginClick() {
    this.props.login();
  }

  render() {
    if (oauthUtils.getAccessToken() && this.props.athlete && this.props.athlete.firstname) {
      browserHistory.push('/summary');
      return (
        <div>
          <h1>{'Welcome ' + this.props.athlete.firstname}</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Welcome to StravaXL</h1>
        <img 
          src="../../public/ConnectWithStrava.png"
          onClick={() => this._onLoginClick()}
          style={{'cursor':'pointer'}}
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  athlete: React.PropTypes.object, //eslint-disable-line
  getAthlete: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    athlete: state.athlete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      oauthApi.login()
        .then((response) => {
          window.location = response.data.uri;
        })
        .catch((error) => {
          console.log('authorization result error', error);
        });
    },
    getAthlete: (accessToken) => {
      athleteApi.get(accessToken)
        .then((response) => {
          dispatch(athleteActions.setAthlete(response.data));
        })
        .catch((err) => {
          console.log('ATHLETE FAILURE', err);
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);