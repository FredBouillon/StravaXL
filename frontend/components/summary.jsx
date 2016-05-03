import React from 'react';
import axios from 'axios';

export default class Summary extends React.Component {
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
    return (
      <div>
        <div>{'Summary'}</div>
        <button onClick={() => this._onClick()}>{'Log in with strava'}</button>
        <p>{this.state.athlete.firstname}</p>
      </div>
    );
  }

  _onClick() {
    axios.get(window.location.origin + '/api/auth/strava')
      .then(function (response) {
        console.log('authorization result', response);
      })
      .catch(function (response) {
        console.log('authorization result errorƒ', response);
      });
  }
}