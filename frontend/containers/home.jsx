import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as athleteActions from '../actionCreators/athleteActions';
import * as athleteApi from '../api/athlete';
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
          style={{'cursor':'pointer'}}
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  athlete: React.PropTypes.object, //eslint-disable-line
  getAthlete: React.PropTypes.func,
  login: React.PropTypes.func
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
          console.log('authorization result error', error); //eslint-disable-line
        });
    },
    getAthlete: (accessToken) => {
      athleteApi.get(accessToken)
        .then((response) => {
          dispatch(athleteActions.setAthlete(response.data));
        })
        .catch((err) => {
          console.log('ATHLETE FAILURE', err); //eslint-disable-line
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);