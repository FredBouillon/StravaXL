import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Summary from './components/summary.jsx';
import Activities from './containers/activities.jsx';
import Home from './containers/home.jsx';
import OAuth from './containers/oauth.jsx';
import App from './containers/app.jsx';
import '../css/app.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import axios from 'axios';
import * as oauthUtils from './utils/oauth';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { isUserLoggedIn } from './selectors/athlete';
import thunk from 'redux-thunk';

injectTapEventPlugin();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// axios.defaults.headers.common['Authorization'] = oauthUtils.getAccessToken();
axios.defaults.headers.common.Authorization = oauthUtils.getAccessToken();

require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.js');

const history = syncHistoryWithStore(browserHistory, store);

function redirectIfAuthenticated(nextState, replace) {
  if (isUserLoggedIn(store.getState())) {
    replace({
      pathname: '/summary',
    });
  }
}

function redirectIfNotAuthenticated(nextState, replace) {
  if (!isUserLoggedIn(store.getState())) {
    replace({
      pathname: '/',
    });
  }
}

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={redirectIfAuthenticated} />
        <Route path="oauthcallback" component={OAuth} />
        <Route path="summary" component={Summary} onEnter={redirectIfNotAuthenticated} />
        <Route path="activities" component={Activities} onEnter={redirectIfNotAuthenticated} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
