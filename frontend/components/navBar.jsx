import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import { browserHistory } from 'react-router';

export default class navBar extends React.Component {
  _navigateTo(path) {
    browserHistory.push(path);
  }

  _renderDrawerToggleIcon() {
    if (!this.props.isUserLoggedIn) {
      return <div></div>;
    }
  }

  _renderIconMenu() {
    if (this.props.isUserLoggedIn) {
      return (
        <IconMenu
          iconButtonElement={this._renderIconButtonElement() }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem primaryText="Sign out" onClick={this.props.logout} />
        </IconMenu>
      );
    }
  }

  _renderIconButtonElement() {
    return (
      <div>
        <Avatar src={this.props.athlete.profile_medium} />
        <IconButton><MoreVertIcon color="white"/></IconButton>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Drawer open={this.props.isDrawerOpen}>
          <AppBar
            title="StravaXL"
            onLeftIconButtonTouchTap={this.props.toggleDrawer}
          />
          <MenuItem onClick={this._navigateTo.bind(this, '/summary') }>{'Summary'}</MenuItem>
          <MenuItem onClick={this._navigateTo.bind(this, '/activities') }>{'Activities'}</MenuItem>
        </Drawer>
        <AppBar
          title="StravaXL"
          onLeftIconButtonTouchTap={this.props.toggleDrawer}
          iconElementRight={this._renderIconMenu(this.props) }
          iconElementLeft={this._renderDrawerToggleIcon(this.props) }
        />
      </div>
    );
  }
}

navBar.propTypes = {
  athlete: React.PropTypes.shape({
    profile_medium: React.PropTypes.string
  }),
  isDrawerOpen: React.PropTypes.bool,
  isUserLoggedIn: React.PropTypes.bool,
  logout: React.PropTypes.func,
  toggleDrawer: React.PropTypes.func
 
};

