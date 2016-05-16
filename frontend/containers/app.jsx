import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navBar.jsx';
import * as oauthUtils from '../utils/oauth';
import * as athleteActions from '../actionCreators/athleteActions';

class AppContainer extends Component {
  render() {
    return (
        <div>
          <NavBar athlete={this.props.athlete} onLogout={this.props.logout} />
          {this.props.children}
        </div>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.element
};

const mapStateToProps = (state) => {
  return {
    athlete: state.athlete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      oauthUtils.clearAccessToken();
      dispatch(athleteActions.clearAthlete());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);