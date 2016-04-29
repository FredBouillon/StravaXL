import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';


export default class Activities extends React.Component {
  render() {
    return (
      <AppBar title="StravaXL" iconClassNameRight="muidocs-icon-navigation-expand-more">
        <Link to="/summary" style={{ 'textDecoration': 'initial' }}><MenuItem style={{ color: 'white' }} primaryText="Summary" /></Link>
        <Link to="/activities" style={{ 'textDecoration': 'initial' }}><MenuItem style={{ color: 'white' }} primaryText="Activities" /></Link>
      </AppBar>
    );
  }
}