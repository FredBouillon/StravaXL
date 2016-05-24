import React from 'react';

export default class Summary extends React.Component {
  render() {
    return (
      <div>
        <div>{'Summary'}</div>
        <div className="row">
          <div className="col s1" style={{'border':'1px solid black'}}>{'1'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'2'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'3'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'4'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'5'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'6'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'7'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'8'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'9'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'10'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'11'}</div>
          <div className="col s1" style={{'border':'1px solid black'}}>{'12'}</div>
        </div>
      </div>
    );
  }
}