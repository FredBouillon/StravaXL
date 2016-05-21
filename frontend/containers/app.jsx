import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navBar.jsx';
import * as oauthUtils from '../utils/oauth';
import * as athleteActions from '../actionCreators/athleteActions';
import * as uiActions from '../actionCreators/uiActions';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import redTheme from '../materialUiThemes/redTheme';

const muiTheme = getMuiTheme(redTheme);

class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar athlete={this.props.athlete} logout={this.props.logout} toggleDrawer={this.props.toggleDrawer} isDrawerOpen={this.props.isDrawerOpen}/>
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
    athlete: state.athlete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      oauthUtils.clearAccessToken();
      dispatch(athleteActions.clearAthlete());
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