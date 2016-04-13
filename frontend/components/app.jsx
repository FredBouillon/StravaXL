import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1>StravaXL !</h1>
      </div>
    )
  }

  componentDidMount() {
    console.log('NODE_ENV', process.env.NODE_ENV);

    axios.get('http://localhost:8080/api/athlete')
      .then(function (response) {
        console.log('axios result get persons', response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }
}
