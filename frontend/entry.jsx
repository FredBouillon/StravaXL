import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Summary from './components/summary.jsx';
import Activities from './components/activities.jsx';
import NavBar from './components/navBar.jsx';
import '../css/app.scss';
import {red900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red900
  }
});

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="summary" component={Summary}/>
      <Route path="activities" component={Activities} />
    </Route>
  </Router>
), document.getElementById('app'));