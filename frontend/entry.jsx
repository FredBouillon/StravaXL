import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
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

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducers);

axios.defaults.headers.common['Authorization'] = oauthUtils.getAccessToken();

require('materialize-css/dist/css/materialize.css');
// window.jQuery = require('jquery');
// window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
//require('materialize-css/js/init.js');

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