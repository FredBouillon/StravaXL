import React from 'react';
import axios from 'axios';

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
      <div>
        <h1>{'StravaXL !'}</h1>
        <p>{this.state.athlete.firstname}</p>
      </div>
    );
  }
}
