import React, { Component } from 'react';
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
  _getStyles() {
    return {
      marginLeft: this.props.isDrawerOpen ? '306px' : '50px',
      marginTop: '30px',
      marginRight: '50px',
    };
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar
            athlete={this.props.athlete}
            logout={this.props.logout}
            toggleDrawer={this.props.toggleDrawer}
            isDrawerOpen={this.props.isDrawerOpen}
            isUserLoggedIn={this.props.isUserLoggedIn}
          />
          <div style={this._getStyles()}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.element,
  isDrawerOpen: React.PropTypes.bool,
  athlete: React.PropTypes.object, //eslint-disable-line
  logout: React.PropTypes.func,
  toggleDrawer: React.PropTypes.func,
  isUserLoggedIn: React.PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isDrawerOpen: state.ui.isDrawerOpen,
  athlete: state.athlete,
  isUserLoggedIn: isUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    oauthUtils.clearAccessToken();
    dispatch(athleteActions.clearAthlete());
    browserHistory.push('/');
  },
  toggleDrawer: () => {
    dispatch(uiActions.toggleDrawer());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
