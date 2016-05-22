import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navBar.jsx';
import * as oauthUtils from '../utils/oauth';
import * as athleteActions from '../actionCreators/athleteActions';
import * as uiActions from '../actionCreators/uiActions';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import redTheme from '../materialUiThemes/redTheme';
import { isUserLoggedIn } from '../selectors/athlete';
import { browserHistory } from 'react-router';

const muiTheme = getMuiTheme(redTheme);

class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar 
            athlete={this.props.athlete} 
            logout={this.props.logout} 
            toggleDrawer={this.props.toggleDrawer} 
            isDrawerOpen={this.props.isDrawerOpen}
            isUserLoggedIn={this.props.isUserLoggedIn}/>
          <div style={this.props.isDrawerOpen ? { 'marginLeft': '300px' } : { 'marginLeft': '50px' }}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.element
};

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.ui.isDrawerOpen,
    athlete: state.athlete,
    isUserLoggedIn: isUserLoggedIn(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      oauthUtils.clearAccessToken();
      dispatch(athleteActions.clearAthlete());
      browserHistory.push('/');
    },
    toggleDrawer: () => {
      dispatch(uiActions.toggleDrawer());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);