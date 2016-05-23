import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import Summary from './components/summary.jsx';
import Activities from './components/activities.jsx';
import Home from './containers/home.jsx';
import OAuth from './containers/oauth.jsx';
import App from './containers/app.jsx';
import '../css/app.scss';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import axios from 'axios';
import * as oauthUtils from './utils/oauth';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { isUserLoggedIn } from './selectors/athlete';


injectTapEventPlugin();

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducers);
axios.defaults.headers.common['Authorization'] = oauthUtils.getAccessToken();

require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.js');

const history = syncHistoryWithStore(browserHistory, store);

const _getComponent = (cb, component) => {
  if (isUserLoggedIn(store.getState())) {
    cb(null, component);
  } else {
    browserHistory.push('/');
  }
};

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="oauthcallback" component={OAuth}/>
        <Route path="summary" getComponent={(nextState, cb) => _getComponent(cb, Summary)}/>
        <Route path="activities" getComponent={(nextState, cb) => _getComponent(cb, Activities)}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));