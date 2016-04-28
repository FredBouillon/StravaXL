import React from 'react';
import axios from 'axios';
import AppBar from 'material-ui/appBar';
// import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/MenuItem';
import {red900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red900,
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      athlete: ''
    };
  }

  componentDidMount() {
    var self = this;
    axios.get(window.location.origin + '/api/athlete')
      .then(function (response) {
        console.log('axios result get athlete', response);
        self.setState({
          athlete: response.data
        });
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="StravaXL"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
            <MenuItem style={{color: 'white'}} primaryText="Summary" />
            <MenuItem style={{color: 'white'}} primaryText="Activities" />
          </AppBar>
          <p>{this.state.athlete.firstname}</p>
        </div>
      </MuiThemeProvider>
    );
  }
}
