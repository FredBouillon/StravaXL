import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Summary from './components/summary.jsx';
import Activities from './components/activities.jsx';
import Home from './containers/home.jsx';
import OAuth from './containers/oauth.jsx';
import NavBar from './components/navBar.jsx';
import '../css/app.scss';
import {red900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import axios from 'axios';
import * as oauthUtils from './utils/oauth';

let store = createStore(reducers);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red900
  }
});

axios.defaults.headers.common['Authorization'] = oauthUtils.getAccessToken();

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
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="oauthcallback" component={OAuth}/>
        <Route path="summary" component={Summary}/>
        <Route path="activities" component={Activities} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));